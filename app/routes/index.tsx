import React from 'react'
import Footer from '~/components/footer/Footer'
import { CallToAction } from '~/components/landingPage/CallToAction'
import { Hero } from '~/components/landingPage/Hero'
import Navbar from '~/components/landingPage/Navbar'
import { PrimaryFeatures } from '~/components/landingPage/PrimaryFeatures'
import { SecondaryFeatures } from '~/components/landingPage/SecondaryFeatures'
import Stats from '~/components/landingPage/Stats'
import { Testimonial } from '~/components/landingPage/Testimonial'

const index = () => {
  return (
    <div>
      <Navbar/>
      
       <Hero />
    
     <PrimaryFeatures />
      <SecondaryFeatures />
       <CallToAction />
       <Stats/>
<Testimonial/>
<Footer collections={[]}/>       
    </div>
  )
}

export default index