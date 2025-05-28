import React, { useEffect, useRef, useState } from "react";
import stopWatch from '../assets/stop-watch.png'
import mute from '../assets/volume-up.png'
import Unmute from '../assets/volume.png'
import reload from '../assets/reload-time.png'
import keypressedSound from '../assets/click.wav'
import { useParams } from "react-router-dom";
import { generateNewParagraph } from "../utils/commonFunctions";

let isMistake = false
let typedString = ''

export default function Typing({ paragraph, id }: { paragraph: string[], id: string }) {
  const [typingText, setTypingText] = useState(paragraph[generateNewParagraph(paragraph)])
  const [isMute, setIsMute] = useState(false)
  const [hasMistake, setHasMistake] = useState(-1)
  const [wpm, setWPM] = useState(0)
  const [cpm, setCPM] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [minute, setMinute] = useState(id.split('-')[0])
  const [second, setSecond] = useState(0)
  const [text, setText] = useState('')
  const audio = new Audio(keypressedSound)
  const [translateY, setTranslateY] = useState(0)
  const paragraphDivRef = useRef<HTMLDivElement | null>(null)
  const [lineCount, setLineCount] = useState(1)
  const charRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let intervalId;
    let startTime = new Date()
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

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (/^[a-zA-Z]$/.test(e.key) || e.key == ' ' || /^[0-9]$/.test(e.key) || e.key == '.') {
      audio.play()
      console.log('first', typingText[text.length], text, '|', e.key)
      if (typingText[text.length] == e.key) {
        isMistake = false
        setText(text + e.key)
        if (paragraphDivRef.current) {
          const paragraphRect = paragraphDivRef.current.getBoundingClientRect()
          const wordPerline = Math.floor((paragraphRect.width) / 33)
          if (text.length + 1 == wordPerline * lineCount) {
            setTranslateY(72 * lineCount)
            setLineCount(prevState => prevState + 1)
          }
        }
      } else {
        if (!isMistake) {
          setText(text + e.key)
          if (paragraphDivRef.current) {
            const paragraphRect = paragraphDivRef.current.getBoundingClientRect()
            const wordPerline = Math.floor((paragraphRect.width) / 33)
            if (text.length + 1 == wordPerline * lineCount) {
              setTranslateY(72 * lineCount)
              setLineCount(prevState => prevState + 1)
            }
          }
          isMistake = true
        } else {
          setHasMistake(text.length)
        }
      }

    } else if (e.nativeEvent.code == 'Backspace') {
      audio.play()
      if (paragraphDivRef.current) {
        const paragraphRect = paragraphDivRef.current.getBoundingClientRect()
        const wordPerline = Math.floor((paragraphRect.width) / 33)
        if (wordPerline * (lineCount - 1) == text.length) {
          if (lineCount > 1) {
            setTranslateY(72 * (lineCount - 2))
            setLineCount(prevState => prevState - 1)
          }
        }
      }
      typedString.slice(0, -1)
      setText(text.slice(0, -1))
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setHasMistake(-1)
    }, 200);
  }, [hasMistake])



  return (
    <div className='h-full'>
      <div className="h-full flex flex-1 flex-col justify-between gap-3">
        <input className="absolute top-0" type="text" value={text} onKeyUp={handleKeyUp} autoFocus={true} />
        <div className="flex-1 rounded-xl bg-[#FFFFFF80] p-5 mb-5 overflow-hidden">
          <div className="overflow-hidden">
            <div ref={paragraphDivRef} className={`flex flex-wrap justify-center transition ease-in-out`} style={{ transform: `translateY(-${translateY}px)`, }}>
              {typingText.split('').map((item, index) => (
                <div ref={el => (charRef.current[index] = el)} className={`mb-4 border-b-2 ${text.length == index ? 'animate-blink' : ''}`}>
                  <span className={`block w-[25px] h-full pb-3 mr-2
            `}>
                    <span className={`block h-full rounded-md text-[30px] leading-[30px] p-1.5
             ${text[index] == item ? 'bg-green-200 text-geen-300' : index < text.length ? 'bg-red-200 text-red-500' : ''}
             ${hasMistake == index ? 'animate-shake bg-red-200 text-red-500' : ''}
            `}>{item}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>)
}
