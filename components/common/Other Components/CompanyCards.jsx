import React from 'react';
// import CompanyImage from '../Other Components/CompanyImage.png';
import Image from 'next/image';

const CompanyCards = ({ title, company, image }) => {
  return (
    <div className="md:w-[380px] cursor-pointer hover:shadow-md rounded-2xl h-fit border-[1px] p-4">
      <div className="flex items-start justify-between w-[100%]">
        <div className="sm:max-w-[70%] w-full ">
          <p className="font-inter sm:w-[270px] text-sm sm:text-lg leading-[1.4em] font-bold">
            {title}
          </p>
          <p className="font-inter text-base mt-1 leading-[1.4em]">{company}</p>
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
            src={`/images/${image}.jpg`}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCards;
