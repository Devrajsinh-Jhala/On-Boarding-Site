import React from 'react';
import CompanyCards from '../common/Other Components/CompanyCards';
import { BiRightArrowAlt } from 'react-icons/bi';
import PreferenceTags from '../common/Other Components/PreferenceTags';

const OtherComponents = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-start mt-40">
        {/* Tagline */}
        <h2 className=" px-4 w-fit lg:max-w-[780px] text-center font-inter text-[40px] md:text-[60px] font-bold tracking-[-2px] leading-[1.3em]">
          Today's top companies are hiring
        </h2>

        {/* Sub Heading */}
        <p className="font-inter px-5 text-center w-fit lg:max-w-[780px] mt-4 text-[18px] leading-[1.5em]">
          We partner with top US companies from early-stage startups to Fortune
          500 companies to bring the best jobs in tech and finance to you.
        </p>
      </div>

      {/* Company Cards */}
      <div className="mx-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div className="col-span-1">
          <CompanyCards />
        </div>
        <div className="col-span-1">
          <CompanyCards />
        </div>
        <div className="col-span-1">
          <CompanyCards />
        </div>
        <div className="col-span-1">
          <CompanyCards />
        </div>
        <div className="col-span-1">
          <CompanyCards />
        </div>
        <div className="col-span-1">
          <CompanyCards />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mb-10 mt-10 h-[225px] bg-[#ebf4f6]" />

      <div className=" mt-10">
        {/* Second Tagline */}
        <div className="flex flex-col items-center justify-start">
          <h2 className=" w-fit px-4  text-center lg:max-w-[780px] font-inter text-[40px] md:text-[60px] font-bold tracking-[-2px] leading-[1.3em]">
            What matters to you matters to us.
          </h2>

          {/* Sub Heading */}
          <p className="font-inter px-5 text-center  w-fit lg:max-w-[780px] mt-4 text-[18px] leading-[1.5em]">
            Salary. Diversity. Benefits. Location. Everything you’re looking
            for.
          </p>
        </div>

        {/* Preference Tags */}
        <div className="flex mt-10 flex-col items-center justify-center">
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <PreferenceTags />
            </div>
            <div className="col-span-1">
              <PreferenceTags />
            </div>
            <div className="col-span-1">
              <PreferenceTags />
            </div>
            <div className="col-span-1">
              <PreferenceTags />
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <PreferenceTags />
            </div>
            <div className="col-span-1">
              <PreferenceTags />
            </div>
            <div className="col-span-1">
              <PreferenceTags />
            </div>
          </div>
        </div>

        {/* Second Divider */}
        <div className="w-full px-[20px] mb-10 md:px-[50px] flex items-center justify-center ">
          <div className="w-full h-fit max-w-[1340px] mb-10 mt-10 md:h-[150px] rounded-xl bg-[#ebf4f6]">
            <div className="flex md:flex-row flex-col mx-auto py-[32px] px-[24px] w-full items-start justify-start md:justify-between">
              <div className="float-left flex flex-col justify-start items-start text-lg leading-[1.4em] ">
                {/* Title */}
                <div className=" text-left font-inter font-bold leading-[1.25em]">
                  On Untapped, you own your story.
                </div>
                {/* Sub Title*/}
                <div className="font-inter text-left my-2">
                  Unlike other job platforms, we never guess your gender, race,
                  or ethnicity.
                </div>
                {/* Arrow Text */}
                <div className="flex items-center cursor-pointer justify-center">
                  <p className="font-inter text-base leading-[1.4em] text-blue-600">
                    Read why
                  </p>
                  <span className="text-base text-blue-600">
                    <BiRightArrowAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherComponents;
