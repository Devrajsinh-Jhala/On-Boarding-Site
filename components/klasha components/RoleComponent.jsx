import React from 'react';
import styles from '../../styles/student.module.css';

const RoleComponent = () => {
  return (
    <div className=" max-w-full lg:max-w-[1320px] mb-10 mx-auto px-4 lg:px-[50px] w-full ">
      <h1
        className={`text-center max-w-[872px] ${styles.fontGazpacho} mb-8 lg:mb-[60px] mx-auto font-medium text-[40px] lg:text-[64px] leading-[110%] lg:leading-[120%] tracking-[-0.02em] `}
      >
        What will your role as a Klasha campus ambassador entail?
      </h1>
      <div className="flex lg:flex-row flex-col gap-0 lg:gap-[40px] ">
        <div className="bg-white mt-6 lg:mt-0 border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p className="font-normal w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] ">
            Invitation
          </p>
          <p className="text-base lg:w-[182px] leading-[160%] ">
            Invite friends, family and colleagues to create and maintain a
            Klasha account and win cash rewards.
          </p>
        </div>
        <div className="bg-white mt-6 lg:mt-0  border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p className="font-normal w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] ">
            Opportunities
          </p>
          <p className="text-base lg:w-[182px] leading-[160%] ">
            Identify trends and opportunities that Klasha can take advantage of
            on-campus.
          </p>
        </div>
        <div className="bg-white mt-6 lg:mt-0  border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p className="font-normal w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] ">
            Promotion
          </p>
          <p className="text-base lg:w-[182px] leading-[160%] ">
            Learn about Klasha's products and services, and promote their use on
            campus.
          </p>
        </div>
        <div className="bg-white mt-6 lg:mt-0  border-[1px] border-black rounded-[8px] p-8 lg:p-10 flex-grow  lg:flex-grow-0 flex-shrink basis-[100%] lg:basis-[22%] ">
          <p className="font-normal w-[182px] tracking-[-0.02em] mb-[8px] text-[24px] leading-[133%] ">
            Image
          </p>
          <p className="text-base lg:w-[182px] leading-[160%] ">
            Represent the Klasha brand on campus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleComponent;
