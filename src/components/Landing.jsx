import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import PricingTable from './PricingTable'
import ContactForm from './ContactForm'

const Landing = () => {
  return (
    <div className='w-full h-max'>
        <Hero/>
        <Services/>
        <PricingTable/>
        <ContactForm/>
    </div>
  )
}

export default Landing