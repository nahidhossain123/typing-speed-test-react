import React from 'react'

export default function StartScreen() {
    return (
        <div className="h-screen flex justifiy-center items-center">
            <div className=' space-y-3'>
                <div className="bg-gray-100 rounded-xl p-5 shadow-md text-center">
                    <h5>WELCOME TO TYPTING SPEED TEST</h5>
                    <h1 className='text-[60px]'>Test Your Typing Skills</h1>
                </div>
                <div className='flex flex-row  gap-5'>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>1 Min Test</p>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>3 Min Test</p>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>5 Min Test</p>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>10 Min Test</p>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>1 Page</p>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p>Custom</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
