import React from 'react'
import Hero from '../components/Hero'
import Numbers from '../components/Numbers'
import OurServicesSection from '../components/OurServicesSection'
import DirectorySection from '../components/DirectorySection'
import EventSection from '../components/EventSection'
import TestimonialSection from '../components/TestimonialSection'
import SubscribeSection from '../components/SubscribeSection'
import EmpowermentSection from '../components/EmpowermentSection'

const Home = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <OurServicesSection />
      <EmpowermentSection />
      <DirectorySection />
      <EventSection />
      <TestimonialSection />
      <SubscribeSection />
    </>
  )
}

export default Home