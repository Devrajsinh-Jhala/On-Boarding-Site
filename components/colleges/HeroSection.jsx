import React from 'react';
import styles from '../../styles/student.module.css';
import FourPoints from './FourPoints';
import TextLoop from 'react-text-loop';

const HeroSection = () => {
  return (
    <section className="bg-white ">
      <section className="relative mt-16 ">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
          <div className="grid rounded-2xl pt-14 lg:min-h-[540px] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:py-0 lg:text-left bg-white text-center">
            <div className="px-5 sm:px-10 md:px-16 md:py-10 ">
              <h1
                className={`font-black antialiased text-[40px] tracking-[-0.01em] leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] ${styles.fontGazpacho} `}
              >
                Transforming the educational opportunities
              </h1>
              <p className="font-normal   mb-4 text-[18px] tracking-[-0.015em] leading-[2rem] whitespace-pre-wrap py-4 md:mb-0 md:py-8 text-black">
                Hirable is transforming the university recruiting of future.
                Give your students unique exposure to companies and get them
                noticed
              </p>
              <button
                type="button"
                className="text-sm inline-flex cursor-pointer items-center justify-center text-center h-10 px-8 rounded-full text-white bg-[#1E1928] hover:bg-[#1E1928]/75"
              >
                Get Started
              </button>
            </div>

            <div className="ml-5 h-fit flex-row justify-end flex">
              {/* <img
              className="object-cover bg-bottom"
              src="/images/student-hero.jpg"
              alt=""
            /> */}
              <img
                className="object-cover bg-bottom"
                src="/images/banner 3-02.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="xl:mx-20">
        <div
          className="bg-[#fffaf5] mid-lg:block   mt-18 py-16 pr-4"
          data-aos="fade-up"
          data-aos-delay="220"
        >
          {/* <img
          src="/images/collaboration.png"
          alt="collabration"
          className="w-fit object-cover h-96 rounded-md"
        /> */}
          <div className="ml-8 flex flex-col items-center justify-center text-center mid-lg:mt-8 mt-0">
            <p className="text-lg text-center  md:max-w-[850px] tracking-[-.015em] mb-8 leading-[1.875rem]">
              We empower colleges and universities to fundamentally change their
              relationship with students from being just an education provider
              to a success partner by helping colleges get more number of
              opportunities for their students.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-10 ">
        <FourPoints />
      </section>

      <section className="mt-10 mb-10">
        <div
          className=" bg-white mid-lg:block   mt-18 py-16 pr-4"
          data-aos="fade-up"
          data-aos-delay="220"
        >
          {/* <img
          src="/images/collaboration.png"
          alt="collabration"
          className="w-fit object-cover h-96 rounded-md"
        /> */}
          <div className="ml-8 flex flex-col items-center justify-center text-center mid-lg:mt-8 mt-0">
            {/* Sub Heading */}
            <p
              className={`font-medium text-[20px] sm:text-[22px] ${styles.fontGazpacho} text-center mb-4 max-w-[960px] mx-auto `}
            >
              Company Sponsored
            </p>
            {/* Heading */}
            <h2
              className={`font-inter ${styles.fontGazpacho} text-[30px]  md:text-[40px] mb-8 font-extrabold leading-[1.3em] tracking-wide md:tracking-[-.015em] text-center  max-w-[960px]  mx-auto `}
            >
              <TextLoop className="text-center mx-auto" fade="true">
                <span>Scholarship</span>
                <span>Fellowship</span>
                <span>Research</span>
              </TextLoop>
            </h2>

            {/* Description */}
            <p className="font-inter text-[18px] tracking-[-0.015em] leading-[1.8rem] text-center mx-auto max-w-[900px] ">
              Hirable is coming with the world's first of it's kind communities
              known as "Super Communities" to help students explore, ideate,
              collaborate and get rewarded for unique student experiences
            </p>

            <p className="text-lg text-center  md:max-w-[850px] tracking-[-.015em] mb-8 leading-[1.875rem]">
              Engage with leading companies and organizations that sponsor
              coursework, research, entrepreneurship as well as other student
              interests and opportunities.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
