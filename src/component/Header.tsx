import { Link } from 'react-router-dom'
import ThemeButton from './ui/ThemeButton'

const Header = () => {
    return (
        <header className='bg-gradient-to-r from-[#0b85bb] to-[#5cb5db] p-5 flex items-center justify-between'>
            <Link className='text-white' to={'/'}>
                <span className='font-quicksand font-extrabold text-2xl'>TypingTest</span>
                <span>.com</span>
            </Link>
            <div className='flex items-center justify-between gap-10 text-white'>
                <nav className='flex items-center gap-3'>
                    <Link className='font-quicksand font-medium hover:text-gray-200' to={'#'}>Lessions</Link>
                    <Link className='font-quicksand font-medium hover:text-gray-200' to={'#'}>Tests</Link>
                    <Link className='font-quicksand font-medium hover:text-gray-200' to={'#'}>Games</Link>
                    <Link className='font-quicksand font-medium hover:text-gray-200' to={'#'}>Progress</Link>
                </nav>
                <div className='space-x-3'>
                    <ThemeButton>Singn Up Free</ThemeButton>
                    <ThemeButton>Login</ThemeButton>
                </div>
            </div>
        </header>
    )
}

export default Header