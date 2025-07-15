import React from 'react'
import { CallToAction } from '~/components/landingPage/CallToAction'
import { Hero } from '~/components/landingPage/Hero'
import Navbar from '~/components/landingPage/Navbar'
import { PrimaryFeatures } from '~/components/landingPage/PrimaryFeatures'
import { SecondaryFeatures } from '~/components/landingPage/SecondaryFeatures'
import Stats from '~/components/landingPage/Stats'
import { Testimonial } from '~/components/landingPage/Testimonial'
import { json, redirect, type LoaderFunctionArgs } from '@remix-run/node';
import { getActiveCustomer } from '~/providers/customer/customer';
import FAQs from '../components/landingPage/FAQs';
import CTAsection from '~/components/landingPage/CTAsection'
import Footer from '~/components/landingPage/Footer'

export async function loader({ request }: LoaderFunctionArgs) {
  const activeCustomer = await getActiveCustomer({ request });

  if (activeCustomer.activeCustomer?.id) {
    // If logged in, redirect to /home
    return redirect('/home');
  }

  // Else, allow the landing page to load
  return json({});
}

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
<CTAsection/>
<FAQs/>
<Footer/>

{/* <Footer collections={[]}/>        */}
    </div>
  )
}

export default index