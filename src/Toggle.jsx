import React, { useState } from 'react'

export default function Toggle() {
    const [on, setOn] = useState(false);
    const handleBtn = () => {
        setOn(!on)
    }
  return (
    <div
      className=" w-full h-screen flex justify-center items-center "
      onClick={handleBtn}
    >
      <div className="border-2 border-black bg-[#FFFF01] rounded-[40px] w-[20%]">
        <div
          className={`border-2 border-black w-[25%] text-white duration-1000 rounded-full font-bold p-5 m-1 ${
            on === false
              ? "translate-x-0 bg-[#F00707] "
              : "translate-x-48 bg-green-500"
          }`}
        >
          {on === false ? "OFF" : "On"}
        </div>
      </div>
    </div>
  );
}
