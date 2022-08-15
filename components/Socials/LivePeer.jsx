import React from 'react';
import SocialCards from '../common/Other Components/SocialCards';
import styles from '../../styles/student.module.css';

const LivePeer = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="220" className="px-4 mb-16">
      <div className="flex mt-10 flex-col items-center justify-center">
        {/* Sub Heading */}
        <p className="font-medium text-[20px] sm:text-[22px] font-inter text-center mb-4 max-w-[960px] mx-auto ">
          Super Communities
        </p>
        {/* Heading */}
        <h2
          className={`font-inter ${styles.fontGazpacho} text-[30px]  md:text-[40px] mb-8 font-extrabold leading-[1.3em] tracking-wide md:tracking-[-.015em] text-center  max-w-[960px]  mx-auto `}
        >
          Communities to explore, ideate, collaborate & get rewarded
        </h2>

        {/* Description */}
        <p className="font-inter text-[18px] tracking-[-0.015em] leading-[1.8rem] text-center mx-auto max-w-[900px] ">
          Hirable is coming with the world's first of it's kind communities
          known as "Super Communities" to help students explore, ideate,
          collaborate and get rewarded for unique student experiences
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
    </section>
  );
};

export default LivePeer;
