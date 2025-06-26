import React, { useEffect, useRef, useState } from "react";
import keyPressedSound from '../assets/click.wav'
import { useNavigate } from "react-router-dom";

let isMistake = false
let typedString = ''

export default function Typing({ text, setText, paragraph, isAnalyzing, setIsAnalyzing, isMute }: { text: string, setText: React.Dispatch<React.SetStateAction<string>>, paragraph: string, isAnalyzing: boolean, setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>, isMute: boolean }) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [hasMistake, setHasMistake] = useState(-1)
  const audio = new Audio(keyPressedSound)
  const [translateY, setTranslateY] = useState(0)
  const paragraphDivRef = useRef<HTMLDivElement | null>(null)
  const [lineCount, setLineCount] = useState(1)
  const charRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [])

  useEffect(() => {
    if (isAnalyzing) {
      let elapsedTime = 20
      let wpm = Math.round(text.length / 5 * (60 / elapsedTime))
      let correctChar = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] == paragraph[i]) {
          correctChar++
        }
      }
      const accuracyPercent = Math.round((correctChar / text.length) * 100)
      const netSpeed = Math.round(wpm * (accuracyPercent / 100))
      navigate(`/type/result?wpm=${wpm || 0}&accuracy=${accuracyPercent || 0}&netSpeed=${netSpeed || 0}`)
      setIsAnalyzing(false)
    }
  }, [isAnalyzing])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (/^[a-zA-Z]$/.test(e.key) || e.key == ' ' || /^[0-9]$/.test(e.key) || e.key == '.') {
      if (!isMute) {
        audio.play()
      }
      console.log('first', paragraph[text.length], text, '|', e.key)
      if (paragraph[text.length] == e.key) {
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
      if (!isMute) {
        audio.play()
      }
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
      {isAnalyzing ? (<div>
        <p>Analyzing Your Score Please Wait</p>
      </div>) : (
        <div className="h-full flex flex-1 flex-col justify-between gap-3">
          <input ref={inputRef} className="absolute top-0 opacity-0" type="text" value={text} onKeyUp={handleKeyUp} autoFocus={true} />
          <div className="flex-1 rounded-xl bg-[#FFFFFF80] p-5 mb-5 overflow-hidden">
            <div className="overflow-hidden">
              <div ref={paragraphDivRef} className={`flex flex-wrap justify-center transition ease-in-out font-Oswald`} style={{ transform: `translateY(-${translateY}px)`, }}>
                {paragraph.split('').map((item, index) => (
                  <div ref={el => (charRef.current[index] = el)} className={`mb-4 border-b-2 ${text.length == index ? 'animate-blink' : ''}`}>
                    <span className={`block w-[25px] h-full pb-3 mr-2
            `}>
                      <span className={`block h-full rounded-md text-[30px] leading-[30px] p-1.5
                        ${text[index] == item ? 'bg-green-200 text-green-500' : index < text.length ? 'bg-red-200 text-red-500' : ''}
                        ${hasMistake == index ? 'animate-shake bg-red-200 text-red-500' : ''}
            `}>{item}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>)
}
