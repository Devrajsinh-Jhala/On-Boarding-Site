import React from 'react';
import CompanyCards from '../common/Other Components/CompanyCards';
import { BiRightArrowAlt } from 'react-icons/bi';
import PreferenceTags from '../common/Other Components/PreferenceTags';
import styles from '../../styles/student.module.css';
import DataComponent from '../common/Other Components/DataComponent';

import Google from '../../public/images/google logo.png';
import CompanyCards2 from '../common/Other Components/CompanyCards2';

const OtherComponents = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="220">
      <div className=" flex flex-col items-center justify-start mt-16">
        {/* Tagline */}
        <h2
          className={`px-4 ${styles.fontGazpacho} w-fit lg:max-w-[780px] text-center font-inter text-[30px]  font-bold tracking-[-1px] leading-[1.3em]`}
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
      <div className="flex items-center justify-center">
        <div className="mx-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div className="col-span-1">
            <CompanyCards2
              title={'Software Engineering Intern'}
              company={'Google'}
              image={'google logo'}
            />
          </div>
          <div className="col-span-1">
            <CompanyCards
              title={'Autopilot Foundations Internship C/C++'}
              company={'Tesla'}
              image={'tesla logo'}
            />
          </div>
          <div className="col-span-1">
            <CompanyCards
              title={'Software Engineering UberSTAR Internship Program'}
              company={'Uber'}
              image={'uber logo'}
            />
          </div>
          <div className="col-span-1">
            <CompanyCards2
              title={'Product Management Intern'}
              company={'Microsoft'}
              image={'microsoft logo'}
            />
          </div>
          <div className="col-span-1">
            <CompanyCards
              title={'AWS HR Leadership Development Program Intern'}
              company={'Amazon Web Services(AWS) '}
              image={'aws logo'}
            />
          </div>
          <div className="col-span-1">
            <CompanyCards
              title={'Creator Growth Operation Intern'}
              company={'TikTok'}
              image={'tiktok logo'}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <section
        data-aos="fade-up"
        data-aos-delay="220"
        className="w-full mb-16 mt-16  h-fit bg-[#ebf4f6]"
      >
        <div className=" flex items-center pt-14 justify-center p-6 ">
          <div className="grid grid-span-1 sm:grid-cols-2 gap-10 sm:gap-32">
            <div className="col-span-1">
              <DataComponent
                heading={'100+'}
                description={' Offers with an annual CTC more than $100k'}
              />
            </div>
            <div className="col-span-1">
              <DataComponent
                heading={' 2000+'}
                description={' Oppurtunities at leading tech companies'}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center pb-18 justify-center p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-32">
            <div className=" col-span-1 ">
              <DataComponent
                heading={'1200+'}
                description={'Emerging startups and leading tech companies'}
              />
            </div>
            <div className="col-span-1 ">
              <DataComponent
                heading={'$100k-$1M'}
                description={
                  'In funding avaliable for colleges and universities'
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" data-aos-delay="220" className=" mt-20">
        {/* Second Tagline */}
        <div className="flex flex-col items-center justify-start">
          <h2
            className={` ${styles.fontGazpacho} w-fit px-4  text-center lg:max-w-[780px] font-inter text-[30px]  font-bold tracking-[-1px] leading-[1.3em]`}
          >
            Ideas for you
          </h2>

          {/* Sub Heading */}
        </div>

        {/* Preference Tags */}
        <div className="flex mt-10 flex-col items-center justify-center">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2">
            <div className="col-span-1">
              <PreferenceTags text={'Centralization of Learning'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text={'Increased Experience'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text={'Project based Hiring'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text={'Experience based hiring'} />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-2">
            <div className="col-span-1">
              <PreferenceTags text={'Talent Icons'} />
            </div>
            <div className="col-span-1">
              <PreferenceTags text="Workshop Credits" />
            </div>
            <div className="col-span-1 ">
              <div className="">
                <PreferenceTags text="Assignment based hiring" />
              </div>
            </div>
          </div>
          <p
            className={`font-inter px-5 text-center w-fit lg:max-w-[780px] mt-10 text-[18px] tracking-[-0.015em]  leading-[1.5em] `}
          >
            And more... to connect student experiences to opportunities
          </p>

          {/* <div className="my-5 text-lg tracking-[-0.015em] leading-6 border-[1px] border-green-500 text-green-500 font-semibold rounded-full w-fit h-fit p-4 ">
            <p>MORE COMING SOON</p>
          </div> */}
        </div>

        {/* Second Divider */}
        <div className="w-full px-[20px] mb-16 mt-16 md:px-[50px] flex items-center justify-center ">
          <div className="w-full h-fit max-w-[1340px] mb-10 mt-10 md:h-[150px] rounded-xl bg-[#ebf4f6]">
            <div className="flex md:flex-row flex-col mx-auto py-[32px] px-[24px] w-full items-start justify-start md:justify-between">
              <div className="float-left flex flex-col justify-start items-start text-lg leading-[1.4em] ">
                {/* Title */}
                <div className=" text-left font-inter font-bold leading-[1.25em]">
                  Hirable brings the best opportunities to you
                </div>
                {/* Sub Title*/}
                <div className="font-inter text-left my-2">
                  Do you know that the world's highest graduate CTC is offered
                  to students on Hirable?
                </div>
                {/* Arrow Text */}
                <div className="flex items-center cursor-pointer justify-center">
                  <p className="font-inter text-base leading-[1.4em] text-blue-600">
                    Check out
                  </p>
                  <span className="text-base text-blue-600">
                    <BiRightArrowAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OtherComponents;
