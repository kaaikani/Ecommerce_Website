"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ContainerTextFlipProps {
  words: string[]
  duration?: number
}

export function ContainerTextFlip({ words, duration = 3000 }: ContainerTextFlipProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-white shadow-lg backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.h3
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          aria-live="polite" // Announce changes to screen readers
        >
          {words[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  )
}
