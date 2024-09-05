// frontend/src/components/FormContainer.jsx

import React from "react";

export const FormContainer = ({ form, heading, subHeading }) => {
  return (
    <div className="flex items-center justify-center bg-black/10">
      <div className="flex flex-col p-10 m-[90px] justify-center items-center bg-white/30 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-[15px] border border-white w-full max-w-md">
        <span className="text-2xl font-bold mb-2 text-center"></span>
        <span className="text-2xl font-bold mb-2 text-center">{heading}</span>
        <span className="text-sm font-normal mb-4 text-center">
          {subHeading}
        </span>
        {form}
      </div>
    </div>
  );
};
