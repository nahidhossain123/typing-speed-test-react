import React, { useEffect, useState } from 'react'
import { generateNewParagraph } from '../utils/commonFunctions'
import mute from '../assets/volume-up.png'
import Unmute from '../assets/volume.png'
import reload from '../assets/reload-time.png'
import { Link } from 'react-router-dom'

const TypingPageHeader = ({ paragraph, id }: { paragraph: string[], id: string }) => {
    const [typingText, setTypingText] = useState(paragraph[generateNewParagraph(paragraph)])
    const [isMute, setIsMute] = useState(false)
    const [wpm, setWPM] = useState(0)
    const [cpm, setCPM] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [minute, setMinute] = useState(id.split('-')[0])
    const [second, setSecond] = useState(0)
    const [text, setText] = useState('')


    useEffect(() => {
        let intervalId;

        intervalId = setInterval(() => {
            console.log('Seconds', second, minute)
            if (second > 0) {
                setSecond(prevState => prevState - 1)
            } else if (second == 0 && minute > 0) {
                setMinute(prevState => prevState - 1)
                setSecond(20)
            }
            if (second == 0 && minute == 0) {
                clearInterval(intervalId)
                let elapsedTime = 20
                let cpm = Math.round(text.length / (elapsedTime / 60))
                let wpm = Math.round(text.length / 5 * (60 / elapsedTime))
                setCPM(cpm)
                setWPM(wpm)
                let correctChar = 0;
                for (let i = 0; i < text.length; i++) {
                    if (text[i] == typingText[i]) {
                        correctChar++
                    }
                }
                const accuracyPercent = (correctChar / text.length) * 100
                setAccuracy(accuracyPercent)
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
                    1 Minute Test
                </h4>
            </div>
            <div className="flex items-center gap-5">

                <div className="flex gap-3 text-white">
                    <div className="flex items-center">
                        <span className="rounded-xl text-3xl font-bold">
                            {(parseInt(minute) < 10) ? '0' + minute : minute}:{(second < 10) ? '0' + second : second}
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
                        setMinute(id.split('-')[0])
                        setSecond(0)
                        setTypingText(paragraph[generateNewParagraph(paragraph)])
                    }} className="w-[30px] h-[30px]" src={reload} alt='stop watch' />
                </div>

            </div>
        </div>
    )
}

export default TypingPageHeader