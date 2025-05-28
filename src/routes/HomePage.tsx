import React from 'react'
import StartSection from '../component/StartSection'
import '../App.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import FaqSection from '../component/FaqSection'

export default function HomePage() {
  return (
    <div className='bg-[#D9EEF3]'>
      <Header />
      <div className='max-w-[1200px] mx-auto'>
        <StartSection />
        <div className='mt-28'>
          <FaqSection />
        </div>
        <div className='mt-28 pb-10'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
