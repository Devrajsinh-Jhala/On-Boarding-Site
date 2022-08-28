import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const FourPoints = () => {
  return (
    <div className="lg:max-w-[850px] max-w-full w-full mx-auto px-5">
      <div className="flex lg:flex-row flex-col items-center lg:space-x-5 lg:space-y-0 space-y-10  justify-between">
        <div className="flex flex-col max-w-[360px] items-center space-y-10 justify-center">
          <div className="flex items-center justify-center mr-2">
            <div className="-mt-3 mr-4 text-2xl text-red-500">
              <BsCheckLg />
            </div>
            <p className="text-lg tracking-[-.015em]  leading-[1.875rem]">
              Host LIVE admissions events, career fairs, Q&As, and more, all
              digitally
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="-mt-3 mr-4 text-2xl text-red-500">
              <BsCheckLg />
            </div>
            <p className="text-lg tracking-[-.015em]  leading-[1.875rem]">
              Learn more about and from your students with data-backed insights
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-[360px] items-center space-y-10  justify-center">
          <div className="flex items-center justify-center mr-2">
            <div className="-mt-3 mr-4 text-2xl text-red-500">
              <BsCheckLg />
            </div>
            <p className="text-lg tracking-[-.015em]  leading-[1.875rem]">
              Increase your student’s job placement
            </p>
          </div>
          <div className="flex items-center justify-center mr-2">
            <div className="-mt-3 mr-4 text-2xl text-red-500">
              <BsCheckLg />
            </div>
            <p className="text-lg tracking-[-.015em]  leading-[1.875rem]">
              Grow your university’s reputation and employer network
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPoints;
