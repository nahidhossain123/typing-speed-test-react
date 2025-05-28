import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer >
            <hr className='bg-white' />
            <div className='flex justify-between my-5'>
                <div>
                    <nav className='flex items-center gap-3'>
                        <Link className='font-Oswald text-sm' to={'#'}>typingtest.com</Link>
                        <span>|</span>
                        <Link className='font-Oswald text-sm' to={'#'}>Copywright {new Date().getFullYear()} typingtest.com</Link>
                        <span>|</span>
                        <Link className='font-Oswald text-sm' to={'#'}>Privacy Policy</Link>
                    </nav>
                </div>
                <div>
                    <Link className='font-Oswald text-sm' to={'#'}>instructor login</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer