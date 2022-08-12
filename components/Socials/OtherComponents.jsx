import React from 'react';
import CompanyCards from '../common/Other Components/CompanyCards';
import { BiRightArrowAlt } from 'react-icons/bi';
import PreferenceTags from '../common/Other Components/PreferenceTags';
import styles from '../../styles/student.module.css';

const OtherComponents = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-start mt-40">
        {/* Tagline */}
        <h2
          className={`px-4 ${styles.fontGazpacho} w-fit lg:max-w-[780px] text-center font-inter text-[40px]  font-bold tracking-[-1px] leading-[1.3em]`}
        >
          Today's top companies are hiring
        </h2>

        {/* Sub Heading */}
        <p className="font-inter px-5 text-center w-fit lg:max-w-[780px] tracking-[-0.015em] mt-4 text-[18px] leading-[1.8rem]">
          Hirable is the world's first platform for the best opportunities in
          tech where students don't apply instead they get referred or companies
          apply to students
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
      <div className="w-full mb-10 mt-10  h-fit bg-[#ebf4f6]">
        <div className=" flex items-center justify-between p-6 ">
          <div className="flex w-fit flex-col  ">
            <h3
              className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-[#1E1928] mb-2 ${styles.fontGazpacho}  `}
            >
              100+
            </h3>
            <p className="text-[16px] font-medium leading-[24px] md:leading-[30px] md:text-[18px] tracking-[-.011em] antialiased text-[#1e1928cc]">
              Offers with an annual CTC more than $100k
            </p>
          </div>
          <div className="flex w-fit  flex-col ">
            <h3
              className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-[#1E1928] mb-2 ${styles.fontGazpacho}  `}
            >
              2000+
            </h3>
            <p className="text-[16px] font-medium leading-[24px] md:leading-[30px] md:text-[18px] tracking-[-.011em] antialiased text-[#1e1928cc]">
              Oppurtunities at leading tech companies
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-6">
          <div className="flex  flex-col col-span-1 ">
            <h3
              className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-[#1E1928] mb-2 ${styles.fontGazpacho}  `}
            >
              1200+
            </h3>
            <p className="text-[16px] font-medium leading-[24px] md:leading-[30px] md:text-[18px] tracking-[-.011em] antialiased text-[#1e1928cc]">
              Emerging startups and leading tech companies
            </p>
          </div>
          <div className="flex  flex-col col-span-1 ">
            <h3
              className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-[#1E1928] mb-2 ${styles.fontGazpacho}  `}
            >
              $100k-$1M
            </h3>
            <p className="text-[16px] font-medium leading-[24px] md:leading-[30px] md:text-[18px] tracking-[-.011em] antialiased text-[#1e1928cc]">
              In funding avaliable for colleges and universities
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        {/* Second Tagline */}
        <div className="flex flex-col items-center justify-start">
          <h2
            className={` ${styles.fontGazpacho} w-fit px-4  text-center lg:max-w-[780px] font-inter text-[40px]  font-bold tracking-[-1px] leading-[1.3em]`}
          >
            Ideas for you
          </h2>

          {/* Sub Heading */}
        </div>

        {/* Preference Tags */}
        <div className="flex mt-10 flex-col items-center justify-center">
          <div className=" flex items-center  w-full justify-center space-x-3">
            <div className="col-span-1">
              <PreferenceTags text={'Centralization of Learning'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text={'Experience Enhancement Programs'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text={'Project based Hiring'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text={'Experience based hiring'} />
            </div>
          </div>
          <div className="flex items-center w-full lg:mr-3 justify-center mt-3 space-x-3">
            <div className="col-span-1">
              <PreferenceTags text={'Talent Icons'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text="Workshop Credits" />
            </div>
            <div className="col-span-1">
              <PreferenceTags text="Assignment based hiring" />
            </div>
          </div>
          <p
            className={`font-inter px-5 text-center w-fit lg:max-w-[780px] mt-10 text-[18px] tracking-[-0.015em]  leading-[1.5em] `}
          >
            And more... to connect student experiences to opportunities
          </p>

          <div className="my-5 text-lg tracking-[-0.015em] leading-6 border-[1px] border-green-500 text-green-500 font-semibold rounded-full w-fit h-fit p-4 ">
            <p>MORE COMING SOON</p>
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
