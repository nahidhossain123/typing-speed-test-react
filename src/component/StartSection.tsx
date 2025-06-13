import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Lady from '../assets/lady.svg';
import GentleMan from '../assets/gentleman.svg'

export default function StartSection() {
    const [testTime, setTestTime] = useState('1-minute')

    const setTestTimeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        setTestTime(e.target.value)
    }
    return (

        <div className='space-y-10 relative bg-white rounded-b-lg p-5 shadow-xl bg-[url("/center-back-light.svg")] bg-no-repeat bg-bottom pt-40'>
            <div className="space-y-4 text-center">
                <h1 className='text-5xl font-Oswald'>Check your typing skills in a minute</h1>
                <h3 className='text-2xl font-Oswald'>Type away to join 150+ million test takers!</h3>
            </div>
            <div className='space-y-5 flex flex-col items-center'>
                <h5 className='font-bold'>SELECT YOUR TEST</h5>
                <select onChange={setTestTimeHandle} className="font-bold px-5 py-3 w-80 border border-gray-300 rounded-full text-gray-900">
                    <option value="30-seconds">30 Second Test</option>
                    <option value="1-minute" selected>1 Minute Test</option>
                    <option value="2-minute">2 Minute Test</option>
                    <option value="3-minute">3 Minute Test</option>
                    <option value="5-minute">5 Minute Test</option>
                    <option value="10-minute">10 Minute Test</option>
                </select>
                <Link className='rounded-full bg-bgPrimary border-2 border-bgLight transform transition-transform duration-300 ease-in-out text-white py-2 px-4 hover:scale-110' to={`/type/${testTime}`}>START TEST</Link>
            </div>
            <img className='absolute -bottom-10 left-12' src={Lady} alt='lady' />
            <img className='absolute bottom-0 right-0' src={GentleMan} alt='gentleman' />

        </div>

    )
}
