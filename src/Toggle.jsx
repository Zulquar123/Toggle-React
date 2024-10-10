import React, { useState } from "react";

export default function Toggle() {
  const [Toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!Toggle);
  };
  return (
    <div
      className="flex justify-center items-center w-full h-screen "
      onClick={handleToggle}
    >
      <div
        className={`border-2 border-green-900  w-[20%] rounded-[40px] bg-[#FFFF01]`}
      >
        <div
          className={`w-[25%] font-bold  duration-1000 border-2 text-white border-black rounded-full p-5 m-1 ${
            Toggle === false
              ? "translate-x-0 bg-[#F00707]"
              : "translate-x-48 bg-green-500"
          }`}
        >
          {Toggle === false ? "OFF" : "On"}
        </div>
      </div>
    </div>
  );
}
