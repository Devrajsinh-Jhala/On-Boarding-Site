import React from 'react';
import styles from '../../styles/student.module.css';

function Hero() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
        <div className="grid rounded-2xl pt-14 lg:min-h-[540px] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:py-0 lg:text-left bg-white text-center">
          <div className="px-5 sm:px-10 md:px-16 md:py-10 ">
            <h1
              className={`font-black antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] ${styles.fontGazpacho} `}
            >
              Get hired by companies looking for diverse talent
            </h1>
            <p className="font-medium  mb-4 text-[18px] leading-8 tracking-tight whitespace-pre-wrap py-4 md:mb-0 md:py-8 text-[#57545f]">
              We are creating a future where students are rewarded in the
              pursuit of their career based on their abilities and experience.
            </p>
            <button
              type="button"
              className="text-sm inline-flex cursor-pointer items-center justify-center text-center h-10 px-8 rounded-full text-white bg-[#1E1928] hover:bg-[#1E1928]/75"
            >
              Book a Demo
            </button>
          </div>

          <div className="ml-5 h-fit flex-row justify-end flex">
            <img
              className="object-cover bg-bottom"
              src="/images/student-hero.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
