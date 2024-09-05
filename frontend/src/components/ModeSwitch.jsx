// frontend/src/components/ModeSwitch.jsx

import React from "react";

export const ModeSwitch = () => {
  return (
    <div className="relative w-[3.5em] h-[2em]">
      <label className="block relative w-full h-full">
        <input type="checkbox" className="opacity-0 w-0 h-0" />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition-all duration-400 rounded-full before:absolute before:content-[''] before:h-[1.4em] before:w-[1.4em] before:rounded-full before:left-[0.3em] before:top-1/2 before:transform before:-translate-y-1/2 before:bg-gradient-to-r before:from-pink-500 before:to-orange-400 before:transition-all before:duration-400"></span>
      </label>
    </div>
  );
};
