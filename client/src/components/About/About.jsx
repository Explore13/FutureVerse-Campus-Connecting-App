import React from 'react'
import ItemCard from '../Cards/AboutProfile'
import Footer from '../Footer/Footer'
import AboutProfile from '../Cards/AboutProfile'

function About() {
  return (
<>
<div className="flex justify-start items-center h-screen">
      <AboutProfile name="Surya Ghosh" dept="ECE,2nd Year"/>
      <AboutProfile name="Susneha Ghosh" dept="IT,2nd Year"/>
      <AboutProfile name="Sumit Karmakar" dept="IT,2nd Year"/>
      <AboutProfile name="Anupam Bhunia" dept="IT,2nd Year"/>
    </div>
    <Footer/>
</>
  )
}

export default About