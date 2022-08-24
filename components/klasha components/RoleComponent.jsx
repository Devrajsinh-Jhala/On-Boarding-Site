import React from 'react';
import styles from '../../styles/student.module.css';

// lg:text-[64px]
const RoleComponent = () => {
  return (
    <div className=" max-w-full lg:max-w-[1320px] mb-10 mx-auto px-4 lg:px-[50px] w-full ">
      <h1
        className={`text-center max-w-[700px] ${styles.fontGazpacho} mb-8 lg:mb-[60px] mx-auto font-bold text-[32px] leading-[140%] tracking-[-0.02em] `}
      >
        What will your role as a Hirable campus ambassador entail?
      </h1>
      <div className="flex lg:flex-row flex-col gap-0 lg:gap-[40px] ">
        <div className="bg-white mt-6 lg:mt-0 border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p
            className={`font-medium ${styles.fontGazpacho} w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] `}
          >
            Learn
          </p>
          <p className="lg:w-[182px] text-lg tracking-[-0.015em] leading-[1.875rem]">
            Learn from the best to maximize your strengths and develop sales and
            marketing skills.
          </p>
        </div>
        <div className="bg-white mt-6 lg:mt-0  border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p
            className={`font-medium ${styles.fontGazpacho} w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] `}
          >
            Brainstrom
          </p>
          <p className="lg:w-[182px] text-lg tracking-[-0.015em] leading-[1.875rem] ">
            Put your thinking cap on and come up with out-of-the-box ideas to
            work towards the implementation of ideas.
          </p>
        </div>
        <div className="bg-white mt-6 lg:mt-0  border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p
            className={`font-medium ${styles.fontGazpacho} w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] `}
          >
            Spearhead
          </p>
          <p className="lg:w-[182px] text-lg tracking-[-0.015em] leading-[1.875rem]">
            Represent Hirable in your campus and promote our new edtech products
            and offerings.
          </p>
        </div>
        <div className="bg-white mt-6 lg:mt-0  border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p
            className={`font-medium ${styles.fontGazpacho} w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] `}
          >
            Grow
          </p>
          <p className=" lg:w-[182px] text-lg tracking-[-0.015em] leading-[1.875rem] ">
            Spread the word and let the student community know the ideas and
            product offering by Hirable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleComponent;
