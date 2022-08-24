import React from 'react';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import styles from '../../styles/student.module.css';

const NewGains = () => {
  return (
    <div className="my-20 pt-[144px] pb-[60px]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-[50px] w-full">
        <h1
          className={`text-center mb-[60px] font-bold text-[40px] ${styles.fontGazpacho} lg:text-[64px] leading-[110%] lg:leading-[120%] tracking-[-0.02em] `}
        >
          What you stand to gain
        </h1>
        <div className="flex flex-wrap gap-10 justify-center box-border">
          <div className=" p-[32px] lg:p-[48px] block box-border bg-white border-[1px] border-black rounded-[8px] flex-grow lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[520px] ">
            {/* Image */}
            <div className="align-top max-w-full text-2xl mb-6 object-cover ">
              <BsFillCalendarCheckFill />
            </div>
            <h3
              className={`mb-2 font-medium text-[20px] ${styles.fontGazpacho} leading-[133%] tracking-[-0.02em] `}
            >
              Rewards and Incentives
            </h3>
            <p className=" lg:max-w-[352px] text-lg tracking-[-0.015em] leading-[1.875rem]  ">
              Get monthly bonuses, performance-based rewards and a 'Rockstar'
              certificate for high performing campus ambassadors.
            </p>
          </div>
          <div className=" p-[32px] lg:p-[48px] block box-border bg-white border-[1px] border-black rounded-[8px] flex-grow lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[520px]  ">
            {/* Image */}
            <div className="align-top max-w-full text-2xl mb-6 object-cover ">
              <BsFillCalendarCheckFill />
            </div>
            <h3
              className={`mb-2 font-medium lg:max-w-[352px] text-[20px] ${styles.fontGazpacho} leading-[133%] tracking-[-0.02em] `}
            >
              Network with the Industry's Best
            </h3>
            <p className="lg:max-w-[352px] text-lg tracking-[-0.015em] leading-[1.875rem]  ">
              Get direct exposure to the corporate world and a chance to build
              meaningful connections for your professional network.
            </p>
          </div>
          <div className=" p-[32px] lg:p-[48px] block box-border bg-white border-[1px] border-black rounded-[8px] flex-grow lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[520px]  ">
            {/* Image */}
            <div className="align-top max-w-full text-2xl mb-6 object-cover ">
              <BsFillCalendarCheckFill />
            </div>
            <h3
              className={`mb-2 font-medium lg:max-w-[352px] text-[20px] ${styles.fontGazpacho} leading-[133%] tracking-[-0.02em] `}
            >
              One of a kind Mentorship Program
            </h3>
            <p className="lg:max-w-[352px] text-lg tracking-[-0.015em] leading-[1.875rem]">
              An opportunity to be mentored by leading professionals at top
              companies to expand your skillset and grow your ingenuity.
            </p>
          </div>
          <div className=" p-[32px] lg:p-[48px] block box-border bg-white border-[1px] border-black rounded-[8px] flex-grow lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[520px] ">
            {/* Image */}
            <div className="align-top max-w-full text-2xl mb-6 object-cover ">
              <BsFillCalendarCheckFill />
            </div>
            <h3
              className={`mb-2 font-medium lg:max-w-[352px] text-[20px] ${styles.fontGazpacho} leading-[133%] tracking-[-0.02em] `}
            >
              Career Support
            </h3>
            <p className="lg:max-w-[352px] text-lg tracking-[-0.015em] leading-[1.875rem]  ">
              Develop intellectual, leadership, and creative skills. Become an
              industry ready professional.
            </p>
          </div>
          <div className=" p-[32px] lg:p-[48px] block box-border bg-white border-[1px] border-black rounded-[8px] flex-grow lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[520px] ">
            {/* Image */}
            <div className="align-top max-w-full text-2xl mb-6 object-cover ">
              <BsFillCalendarCheckFill />
            </div>
            <h3
              className={`mb-2 font-medium lg:max-w-[352px]  text-[20px] ${styles.fontGazpacho} leading-[133%] tracking-[-0.02em] `}
            >
              Experience Credits
            </h3>
            <p className="lg:max-w-[352px] text-lg tracking-[-0.015em] leading-[1.875rem] ">
              Outstanding performers willget experience to work with emerging
              startups and gain work experience.
            </p>
          </div>
          <div className=" p-[32px] lg:p-[48px] block box-border bg-white border-[1px] border-black rounded-[8px] flex-grow lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[520px] ">
            {/* Image */}
            <div className="align-top max-w-full text-2xl mb-6 object-cover ">
              <BsFillCalendarCheckFill />
            </div>
            <h3
              className={`mb-2 font-medium lg:max-w-[352px]  text-[20px] ${styles.fontGazpacho} leading-[133%] tracking-[-0.02em] `}
            >
              Global Community
            </h3>
            <p className="lg:max-w-[352px] text-lg tracking-[-0.015em] leading-[1.875rem] ">
              Network and collaborate with other ambassadors from various
              universities across the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGains;
