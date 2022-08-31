import React from 'react';
import styles from '../../styles/student.module.css';

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
                Great vision without great people is irrelevant
              </h1>
              <p className="font-normal   mb-4 text-[18px] tracking-[-0.015em] leading-[2rem] whitespace-pre-wrap py-4 md:mb-0 md:py-8 text-black">
                We help companies recruit diverse, entry-level talent on the
                basis of their skills and experience beyond the regular
                assessments.
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
    </section>
  );
};

export default HeroSection;
