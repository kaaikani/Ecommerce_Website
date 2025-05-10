"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"

interface Asset {
  id: string
  name: string
  source: string
}

interface Banner {
  id: string
  assets: Asset[]
  channels: {
    id: string
    code: string
  }[]
}

interface BannerCarouselProps {
  banners: Banner[]
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
}

export function BannerCarousel({
  banners,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
}: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Determine if we're on mobile or desktop
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Calculate how many items to show at once
  const itemsPerView = isMobile ? 1 : 2
  
  // Calculate total number of slides
  const totalSlides = Math.ceil(banners.length / itemsPerView)

  // Function to get the actual index for continuous looping
  const getLoopedIndex = useCallback((index: number) => {
    // For continuous looping, we need to handle wrapping around
    if (index < 0) {
      return totalSlides - 1
    } else if (index >= totalSlides) {
      return 0
    }
    return index
  }, [totalSlides])

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => getLoopedIndex(prevIndex + 1))
  }, [getLoopedIndex])

  const goToPrev = useCallback(() => {
    setCurrentIndex(prevIndex => getLoopedIndex(prevIndex - 1))
  }, [getLoopedIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(getLoopedIndex(index))
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext()
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrev()
    }
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragOffset(0)
    
    // Prevent default behavior to avoid text selection during drag
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const currentX = e.clientX
    const newOffset = currentX - dragStartX
    setDragOffset(newOffset)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    // Determine if we should navigate based on drag distance
    if (dragOffset > 100) {
      goToPrev()
    } else if (dragOffset < -100) {
      goToNext()
    }
    
    // Reset drag offset
    setDragOffset(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
    
    // Resume autoplay
    if (isPlaying && banners.length > 1) {
      timerRef.current = setInterval(goToNext, autoPlayInterval)
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev)
  }

  // Autoplay effect
  useEffect(() => {
    if (isPlaying && banners.length > 1) {
      timerRef.current = setInterval(goToNext, autoPlayInterval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, autoPlayInterval, banners.length, goToNext])

  // Pause on hover
  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  // Get banners for the current view
  const getBannersForView = (index: number) => {
    const startIdx = index * itemsPerView
    return banners.slice(startIdx, startIdx + itemsPerView)
  }

  // Handle case when there are no banners
  if (!banners || banners.length === 0) {
    return null
  }

  // Create a continuous loop by duplicating banners if needed
  const visibleBanners = getBannersForView(currentIndex % Math.ceil(banners.length / itemsPerView))
  
  // If we don't have enough banners to fill the view, add from the beginning
  if (visibleBanners.length < itemsPerView && banners.length > itemsPerView) {
    const neededBanners = itemsPerView - visibleBanners.length
    visibleBanners.push(...banners.slice(0, neededBanners))
  }

  return (
    <div
      ref={carouselRef}
      className="banner-carousel relative overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div
        className="carousel-inner flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transitionProperty: isDragging ? 'none' : 'transform'
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
          const slideBanners = getBannersForView(slideIndex)
          
          return (
            <div key={slideIndex} className="carousel-slide min-w-full flex">
              {slideBanners.map((banner, bannerIndex) => (
                <div 
                  key={banner.id} 
                  className={`carousel-item ${isMobile ? 'w-full' : 'w-1/2'} px-1`}
                  style={{ flex: `0 0 ${isMobile ? '100%' : '50%'}` }}
                >
                  {banner.assets && banner.assets.length > 0 && (
                    <img
                      src={banner.assets[0].source || "/placeholder.svg"}
                      alt={banner.assets[0].name}
                      className="w-full h-auto object-cover rounded"
                      draggable="false"
                    />
                  )}
                </div>
              ))}
              
              {/* Fill empty slots if needed */}
              {slideBanners.length < itemsPerView && (
                Array.from({ length: itemsPerView - slideBanners.length }).map((_, emptyIndex) => {
                  const banner = banners[emptyIndex]
                  return (
                    <div 
                      key={`empty-${emptyIndex}`} 
                      className={`carousel-item ${isMobile ? 'w-full' : 'w-1/2'} px-1`}
                      style={{ flex: `0 0 ${isMobile ? '100%' : '50%'}` }}
                    >
                      {banner.assets && banner.assets.length > 0 && (
                        <img
                          src={banner.assets[0].source || "/placeholder.svg"}
                          alt={banner.assets[0].name}
                          className="w-full h-auto object-cover rounded"
                          draggable="false"
                        />
                      )}
                    </div>
                  )
                })
              )}
            </div>
          )
        })}
      </div>

      {showControls && banners.length > 1 && (
        <>
          <button
            className="carousel-control absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70 focus:outline-none"
            onClick={goToPrev}
            aria-label="Previous banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="carousel-control absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70 focus:outline-none"
            onClick={goToNext}
            aria-label="Next banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="carousel-play-pause absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-70 focus:outline-none"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>
        </>
      )}

      {showIndicators && totalSlides > 1 && (
        <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
