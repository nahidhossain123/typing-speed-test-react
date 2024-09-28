import React from 'react'
import StartSection from '../component/StartSection'
import '../App.css'

export default function HomePage() {
  return (
    <div className='page-bg'>
      <div className='max-w-[800px] mx-auto'>
        {/* <Typing /> */}
        <StartSection />
      </div>
    </div>
  )
}
