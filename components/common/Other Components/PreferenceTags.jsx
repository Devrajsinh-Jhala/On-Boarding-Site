import React from 'react';

const PreferenceTags = ({ text }) => {
  return (
    <div className="m-2 p-4 rounded-full text-center bg-[#f4f4f4] w-[250px] h-[fit-content] ">
      <p className="font-inter leading-[1.4em] text-[16px] md:text-lg tracking-[-0.015em]">
        {text}
      </p>
    </div>
  );
};

export default PreferenceTags;
