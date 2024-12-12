import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Why from '../components/Why'
import How from '../components/How'
import Processes from '../components/Processes'
import StepsCards from '../components/Benefits'
import Benefits from '../components/Benefits'
import JoinWaitlistCTA from '../components/JoinWaitlistCta'
import FAQ from '../components/Faq'
import TestCard from '../components/TestCard'
import Testimonials from '../components/Testimonial'

const Home = () => {
  return (
    <div className=' '>
      <Navbar />
      <Hero />
      <Why />
      <How />
      <Processes />
      < Benefits/>
      <Testimonials />
      <FAQ />
      {/* <JoinWaitlistCTA /> */}
      <Footer />
    </div>
  )
}

export default Home
