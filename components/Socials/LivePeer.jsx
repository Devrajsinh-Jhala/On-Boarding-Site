import React from 'react';
import SocialCards from '../common/Other Components/SocialCards';

const LivePeer = () => {
  return (
    <div className="px-4 mb-10">
      <div className="flex mt-10 flex-col items-center justify-center">
        {/* Sub Heading */}
        <p className="font-medium text-[20px] sm:text-[22px] font-inter text-center mb-4 max-w-[960px] mx-auto ">
          Livepeer Communities
        </p>
        {/* Heading */}
        <h2 className="font-inter  text-[48px] sm:text-[72px] mb-8 font-extrabold leading-[1.2em] text-center tracking-tighter max-w-[960px]  mx-auto ">
          Join the Livepeer Community
        </h2>

        {/* Description */}
        <p className="font-inter text-[18px] sm:text-[24px] font-medium tracking-tighter leading-[1.6em] text-center mx-auto max-w-[960px] ">
          Livepeer is an open project that believes in open source code and
          creative contribution from people with diverse interests and
          skillsets. Join us.
        </p>
      </div>

      {/* Social Cards */}
      <div className="flex items-center justify-center mt-10">
        <div className="sm:mx-[90px] grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1">
            <SocialCards />
          </div>
          <div className="col-span-1 flex items-center justify-between">
            <div className="m-0 min-w-0 bg-[#e5e5e5] ml-[16px] w-[1px] h-[72px]   hidden lg:block" />
            <SocialCards />
            <div className="m-0 min-w-0 bg-[#e5e5e5]  w-[1px] h-[72px]   hidden lg:block" />
          </div>
          <div className="col-span-1">
            <SocialCards />
          </div>
          <div className="col-span-1">
            <SocialCards />
          </div>
          <div className="col-span-1 flex items-center justify-between">
            <div className="m-0 min-w-0 bg-[#e5e5e5] ml-[16px] w-[1px] h-[72px]   hidden lg:block" />
            <SocialCards />
            <div className="m-0 min-w-0 bg-[#e5e5e5] w-[1px] h-[72px]   hidden lg:block" />
          </div>
          <div className="col-span-1">
            <SocialCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePeer;
