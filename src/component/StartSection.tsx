import React from 'react'
import { Link } from 'react-router-dom'

export default function StartSection() {
    return (
        <div className="h-screen flex justifiy-center items-center">
            <div className=' space-y-3'>
                <div className="bg-gray-100 rounded-xl p-5 shadow-md text-center">
                    <h5>WELCOME TO TYPTING SPEED TEST</h5>
                    <h1 className='text-[60px]'>Test Your Typing Skills</h1>
                </div>
                <div className='flex flex-row  gap-5'>
                    <Link to='/type/1-minute' className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>1 Min Test</p>
                    </Link>
                    <Link to='/type/2-minute' className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>3 Min Test</p>
                    </Link>
                    <Link to='/type/3-minute' className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>5 Min Test</p>
                    </Link>
                    <Link to='/type/3-minute' className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>10 Min Test</p>
                    </Link>
                    <Link to='/type/1-page' className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>1 Page</p>
                    </Link>
                    <Link to='/type/3-minute' className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>Custom</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
