import React from 'react'
import { ThemeProvider } from '../components/ThemeContext' 
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
  <>
  <ThemeProvider>

    <Navbar/>
    <div className='pt-20'>
    <ContactForm/>
    <Footer/>
    </div>
  </ThemeProvider>
  </>
  )
}

export default ContactPage