import React, { useEffect, useState } from 'react'
import mute from '../assets/volume-up.png'
import Unmute from '../assets/volume.png'
import reload from '../assets/reload-time.png'
import { Link } from 'react-router-dom'

const TypingPageHeader = ({ setIsAnalyzing, onReset, urlParam, isMute, setIsMute }: { setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>, onReset: () => void, urlParam: string, isMute: boolean, setIsMute: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    useEffect(() => {
        let params = urlParam.split('-')
        console.log('Params', params)
        if (params[1] == 'minute') {
            setMinute(Number(params[0]))
        } else if (params[1] == 'seconds') {
            setSecond(Number(params[0]))
        } else {

        }
    }, [])

    useEffect(() => {
        let intervalId: number;
        intervalId = setInterval(() => {
            if (second > 0) {
                setSecond(prevState => prevState - 1)
            } else if (second == 0 && minute > 0) {
                setMinute(prevState => prevState - 1)
                setSecond(60)
            }
            if (second == 0 && minute == 0) {
                setIsAnalyzing(true)
                clearInterval(intervalId)
            }
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [minute, second])
    return (
        <div className="bg-gradient-to-r from-[#0b85bb] to-[#5cb5db] py-2 px-10 flex justify-between gap-5">
            <Link className='text-white' to={'/'}>
                <span className='font-quicksand font-extrabold text-2xl'>TypingTest</span>
                <span>.com</span>
            </Link>
            <div className="flex items-center">
                <h4 className="font-bold text-white">
                    {urlParam.split('-')[0]} {urlParam.split('-')[1]} Test
                </h4>
            </div>
            <div className="flex items-center gap-5">

                <div className="flex gap-3 text-white">
                    <div className="flex items-center">
                        <span className="rounded-xl text-3xl font-bold">
                            {(minute < 10) ? '0' + minute : minute}:{(second < 10) ? '0' + second : second}
                        </span>
                    </div>

                </div>
                <div className="">
                    {isMute ? (<img onClick={() => {
                        setIsMute(false)
                    }} className="w-[30px] h-[30px]" src={Unmute} alt='unmute' />) : (<img onClick={() => {
                        setIsMute(true)
                    }} className="w-[30px] h-[30px]" src={mute} alt='mute' />)}
                </div>
                <div className="">
                    <img onClick={() => {
                        setMinute(Number(urlParam.split('-')[0]))
                        setSecond(0)
                        onReset()
                    }} className="w-[30px] h-[30px]" src={reload} alt='reload' />
                </div>

            </div>
        </div>
    )
}

export default TypingPageHeader