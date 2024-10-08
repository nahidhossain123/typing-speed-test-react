import React, { useEffect, useRef, useState } from "react";
import stopWatch from '../assets/stop-watch.png'
import mute from '../assets/volume-up.png'
import Unmute from '../assets/volume.png'
import reload from '../assets/reload-time.png'
import keypressedSound from '../assets/click.wav'

const paragraph = [
  "Resources exquisite set arranging moonlight sex him household had. Months had too ham cousin remove far spirit. She procuring the why performed continual improving. Civil songs so large shade in cause. Lady an mr here must neat sold. Children greatest ye extended delicate of. No elderly passage earnest as in removed winding or. ",
  "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ",
  "Is allowance instantly strangers applauded discourse so. Separate entrance welcomed sensible laughing why one moderate shy. We seeing piqued garden he. As in merry at forth least ye stood. And cold sons yet with. Delivered middleton therefore me at. Attachment companions man way excellence how her pianoforte. ",
  "Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources. ",
  "For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability. "
];

const randomIndex = Math.floor(Math.random() * paragraph.length)

export default function Typing() {
  const [typingText, setTypingText] = useState(paragraph[randomIndex])
  const [isMute, setIsMute] = useState(false)
  const [text, setText] = useState('')
  const audioRef = useRef(null)
  const audio = new Audio(keypressedSound)
  const [translateY, setTranslateY] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const paragraphDivRef = useRef<HTMLDivElement | null>(null)
  const [lineCount, setLineCount] = useState(1)
  let len = 0;
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {

    if (/^[a-zA-Z]$/.test(e.key) || e.key == ' ' || /^[0-9]$/.test(e.key) || e.key == '.') {
      audio.play()
      setText(text + e.key)
      len = text.length
      if (paragraphDivRef.current) {
        const paragraphRect = paragraphDivRef.current.getBoundingClientRect()
        const wordPerline = Math.floor((paragraphRect.width - 40) / 35)
        if (text.length + 1 == 21 * lineCount) {
          setTranslateY(72 * lineCount)
          let count = lineCount + 1
          setLineCount(count)
        }
        console.log('wordPerline', 21, text.length + 1, translateY, lineCount)

      }
    } else if (e.nativeEvent.code == 'Backspace') {
      audio.play()
      setText(text.slice(0, -1))
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // if (keypressed) return
    // setKeypressed(e.key)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // if (keypressed != e.target.value) {
    //   audio.play()
    //   setText(e.target.value)
    // }
    // console.log('ONchange', e.target.value, keypressed)
  }


  return (
    <div className="h-screen flex flex-1 flex-col justify-between py-5 gap-3">
      <input type="text" value={text} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onChange={handleInput} autoFocus={true} />
      <div className="bg-gray-100 rounded-xl p-2 shadow-md flex gap-5">
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center">
            {/* <img className="w-[30px] h-[30px]" src={stopWatch} alt='stop watch' /> */}
            <span className="block rounded-xl border-2 font-bold border-indigo-600 p-2 flex items-center justify-center">
              01:00
            </span>
          </div>
          <div className="flex items-center">
            {/* <img className="w-[30px] h-[30px]" src={stopWatch} alt='stop watch' /> */}
            <h4 className="font-bold">
              1 Minute Test
            </h4>
          </div>
          <div className="flex gap-5">
            <div className="">
              {isMute ? (<img onClick={() => {
                setIsMute(false)
              }} className="w-[30px] h-[30px]" src={Unmute} alt='unmute' />) : (<img onClick={() => {
                setIsMute(true)
              }} className="w-[30px] h-[30px]" src={mute} alt='mute' />)}
            </div>
            <div className="">
              <img className="w-[30px] h-[30px]" src={reload} alt='stop watch' />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 shadow-md bg-gray-100 rounded-xl  p-5 overflow-hidden">
        <div className="overflow-hidden">
          <div ref={paragraphDivRef} className={`flex flex-wrap justify-center transition ease-in-out`} style={{ transform: `translateY(-${translateY}px)`, }}>
            {typingText.split('').map((item, index) => (
              <div className="mb-4">
                <span className={`block w-[35px] h-full pb-3 border-b-2  
            ${text.length == index ? 'animate-blink' : ''}
            `}>
                  <span className={`block h-full rounded-md text-[30px] leading-[30px] p-1.5
             ${text[index] == item ? 'bg-green-200 text-geen-300' : index < text.length ? 'bg-red-200 text-red-500' : ''}
            `}>{item}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>)
}
