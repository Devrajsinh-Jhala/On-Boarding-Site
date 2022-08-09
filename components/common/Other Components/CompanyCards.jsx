import React from 'react';
// import CompanyImage from '../Other Components/CompanyImage.png';
import Image from 'next/image';

const CompanyCards = () => {
  return (
    <div className="md:w-[380px] cursor-pointer hover:shadow-md rounded-2xl h-fit border-[1px] p-4">
      <div className="flex items-start justify-between w-[100%]">
        <div className="max-w-[70%]">
          <p className="font-inter text-lg leading-[1.4em] font-bold">
            Product Analyst, Web Experimentation
          </p>
          <p className="font-inter text-base mt-1 leading-[1.4em]">
            American Express
          </p>
        </div>
        <div className="max-w-[30%]">
          {/* <img
            className="w-[48px] h-[48px]"
            src="../Other Components/CompanyImage.png"
            alt="Company"
          /> */}
          <Image
            // className="w-[48px] h-[48px]"
            height={'48px'}
            width="48px"
            alt="Company"
            src="/images/CompanyImage.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCards;
