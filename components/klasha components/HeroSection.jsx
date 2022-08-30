import React from 'react';
import styles from '../../styles/student.module.css';

const HeroSection = () => {
  return (
    <div className="max-w-[1320px] mt-32 mx-auto mb-10 w-full px-4 lg:px-[50px] ">
      <div className="text-center block">
        <h1
          className={` text-[40px] ${styles.fontGazpacho} font-bold lg:text-[48px] 2xl:text-[80px] 2xl:leading-[110%] leading-[110%] lg:leading-[130%] tracking-[-0.02em] mb-3 lg:mb-6 mx-auto max-w-[1000px] `}
        >
          Become a Campus Ambassador today!
        </h1>

        {/* Description */}
        <p className=" max-w-full text-center lg:max-w-[850px] mx-auto mb-10 text-lg tracking-[-0.015em] leading-[1.875rem] ">
          The Hirable Campus Ambassador Programme provides an excellent
          opportunity for students across the world to be part of the Hirable
          family and join our mission to create an ecosystem of opportunities
          for students.
        </p>

        <div className=" inline-flex lg:flex items-center justify-center">
          <button className="mx-2 font-semibold text-base leading-[150%] tracking-[-0.02em] text-white bg-[#ef2c5a] rounded-[8px] py-4 px-7 text-center ">
            Apply here for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
