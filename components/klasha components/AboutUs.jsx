import React from 'react';
import styles from '../../styles/student.module.css';

const AboutUs = () => {
  return (
    <div className="mt-24 max-w-[1320px] flex  items-center justify-center px-[50px] my-0 mx-auto w-full ">
      <div className="flex flex-col lg:flex-row space-between items-start  gap-[40px] ">
        {/* Heading */}
        <div className="lg:max-w-[520px] w-full">
          <h1
            className={`font-black antialiased text-[40px] tracking-[-0.01em] leading-[110%] lg:text-[50px] xl:leading-[130%] md:whitespace-pre-wrap text-[#1E1928] ${styles.fontGazpacho} `}
          >
            Establishing a new way of{' '}
            <span className="text-[#ef2c5a]">learning</span>
          </h1>
          <div className="mt-5 text-center py-4 lg:px-7 px-6 lg:text-base text-sm inline-block cursor-pointer bg-black hover:bg-[#ef2c5a] text-white rounded-[8px] ">
            Read about our culture
          </div>
        </div>
        {/* Information */}
        <div className="lg:max-w-[560px] w-full">
          <p className="2xl:text-lg font-normal text-base leading-[180%] ">
            For those first steps into the proessional world, through to
            important descisions you'll make about your career, your
            professional relationships, and about pursuing your dreams and
            goals, we are here to connect every student experience and every
            student interest to an opportunity.
          </p>
          <p className="2xl:text-lg font-normal mt-6 mb-10 text-base leading-[180%]">
            We're a mission-driven tech platform aimed at making students dreams
            come true by creating an ecosystem of opportunities. We're breaking
            down an old system and building a better one. It takes a whole
            ecosystem to build a successful career. That's why we champion the
            power of collaborations in everything we do. By bringing
            universities and employers together with us, we are creating a
            platform changing education and the way hiring takes place for the
            better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
