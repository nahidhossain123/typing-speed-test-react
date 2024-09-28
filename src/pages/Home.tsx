import React from 'react'
import Typing from '../component/Typing'
import StartScreen from '../component/StartScreen'

export default function Home() {
  return (
    <div className='page-bg'>
      <div className='max-w-[800px] mx-auto'>
        {/* <Typing /> */}
        <StartScreen />
      </div>
    </div>
  )
}
