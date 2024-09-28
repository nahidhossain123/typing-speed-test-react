import React, { useState } from "react";

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
  return (
    <div className="h-screen flex flex-1 flex-col justify-between py-5 gap-3">
      <div className="bg-gray-100 rounded-xl p-5 shadow-md ">
        <div>
          <span>

          </span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg-gray-100 rounded-xl p-5 flex-1 shadow-md ">
        {typingText.split('').map((item, index) => (
          <span>{item}</span>
        ))}
      </div>
      <div className="bg-gray-100 rounded-xl p-5 shadow-md ">

      </div>
    </div>)
}
