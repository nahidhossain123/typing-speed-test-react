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
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p className='p-3 font-bold text-center'>1 Min</p>
                        <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" to='/type/1-minute'>
                            Start Test
                        </Link>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p className='p-3 font-bold text-center'>3 Min</p>
                        <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" to='/type/3-minute'>
                            Start Test
                        </Link>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p className='p-3 font-bold text-center'>5 Min</p>
                        <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" to='/type/5-minute'>
                            Start Test
                        </Link>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p className='p-3 font-bold text-center'>10 Min</p>
                        <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" to='/type/10-minute'>
                            Start Test
                        </Link>
                    </div>
                    <div className="bg-gray-100 w-full rounded-xl p-5 shadow-md ">
                        <p className='p-3 font-bold text-center'>1 Page</p>
                        <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" to='/type/1-page'>
                            Start Test
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
