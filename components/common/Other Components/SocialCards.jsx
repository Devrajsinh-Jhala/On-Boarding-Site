import React from 'react';
import { BsDiscord } from 'react-icons/bs';

const SocialCards = () => {
  return (
    <div className="text-lg flex font-inter p-4 pr-8 w-[373px] leading-[1.6em] transition-all duration-200 cursor-pointer hover:shadow-md items-center justify-center ">
      {/* Logo */}
      <div className="mr-2 text-[25px]">
        <BsDiscord />
      </div>
      <p className="font-inter">
        Join our <b className="font-inter">Discord Server</b>
      </p>
    </div>
  );
};

export default SocialCards;
