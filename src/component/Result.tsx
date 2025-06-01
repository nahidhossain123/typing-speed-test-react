import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Result() {
  const [searchParams, setSearchParams] = useSearchParams()
  const wpm = searchParams.get('wpm')
  const accuracy = searchParams.get('accuracy')
  const netSpeed = searchParams.get('netSpeed')

  return <div className="bg-[#FFFFFF80] rounded-xl p-10 w-full shadow-md">
    <div className="flex flex-col justify-center items-center space-y-5">
      <h1 className="text-5xl font-Oswald text-[#04B2D5] italic"> Your Test Score</h1>
      <div className="flex items-center gap-3">
        <section className="flex flex-col items-center text-[#04B2D5]">
          <div className="border-4 border-[#04B2D5] rounded-full w-[100px] h-[100px] flex flex-col justify-center items-center">
            <span className="font-bold text-4xl">
              {wpm}
            </span>
            <span className="font-medium">
              WPM
            </span>
          </div>
          <h5>Typing Speed</h5>
        </section>
        <div className="flex flex-col gap-2">
          <span className="transform translate-y-2 rotate-45 w-10 h-2 rounded-full bg-[#51A9BB80] inline-block"></span>
          <span className="transform -translate-y-2 -rotate-45 w-10 h-2 rounded-full bg-[#51A9BB80] inline-block"></span>
        </div>
        <section className="flex flex-col items-center text-[#04B2D5]">
          <div className="border-4 border-[#04B2D5] rounded-full w-[100px] h-[100px] flex flex-col justify-center items-center">
            <div>
              <span className="font-bold text-4xl">
                {accuracy}
              </span>
              <span>%</span>
            </div>
            <span className="font-medium">
              typos %
            </span>
          </div>
          <h5>Accuracy</h5>
        </section>
        <div className="flex flex-col gap-2">
          <span className="w-10 h-2 rounded-full bg-[#51A9BB80] inline-block"></span>
          <span className="w-10 h-2 rounded-full bg-[#51A9BB80] inline-block"></span>
        </div>
        <section className="flex flex-col items-center text-[#04B205]">
          <div className="border-4 border-[#04B205] rounded-full w-[100px] h-[100px] flex flex-col justify-center items-center">
            <span className="font-bold text-4xl">
              {netSpeed}
            </span>
            <span className="font-medium">
              WPM
            </span>
          </div>
          <h5>Net Speed</h5>
        </section>
      </div>
    </div>
  </div>

}
