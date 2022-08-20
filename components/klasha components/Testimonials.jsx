import React from 'react';
import styles from '../../styles/student.module.css';

const Testimonials = () => {
  return (
    <div className="my-20 pt-[64px] pb-[94px] bg-[#fffbf7] ">
      <div className=" max-w-[1320px] mx-auto px-4 lg:px-[50px] w-full ">
        <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center gap-0 lg:gap-[40px] ">
          <h2
            className={` max-w-full mb-8 ${styles.fontGazpacho} lg:mb-0  lg:max-w-[456px] font-medium text-[40px] lg:text-[64px] leading-[110%] lg:leading-[120%] tracking-[-0.02em] `}
          >
            Testimonials from campus ambassadors
          </h2>
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row flex-wrap max-w-full lg:max-w-[624px] gap-0 lg:gap-[40px]  ">
            <div className="p-8 w-full lg:w-[280px] bg-white border-[1px] border-black rounded-[8px] flex-grow-0 flex-shrink basis-[312px] flex flex-col justify-between text-[24px] leading-[133%] ">
              <p className="mb-[22px]">
                "From getting to meet and network with amazing people from all
                over the country, all the way to getting the opportunity to
                intern, the Klasha Campus Ambassador program is an awesome
                program with amazing benefits. "
              </p>
              <div className="flex flex-col space-y-3 items-start justify-start">
                <p>- Precious Adeyemi</p>
                <p className="text-sm">Obafemi Awolowo University, OAU</p>
              </div>
            </div>
            <div className="p-8 w-full mt-0 lg:mt-8 lg:w-[280px] bg-white border-[1px] border-black rounded-[8px] flex-grow-0 flex-shrink basis-[312px] flex flex-col justify-between text-[24px] leading-[133%]  ">
              <p className="mb-[22px]">
                "From getting to meet and network with amazing people from all
                over the country, all the way to getting the opportunity to
                intern, the Klasha Campus Ambassador program is an awesome
                program with amazing benefits. "
              </p>
              <div className="flex flex-col space-y-3 items-start justify-start">
                <p>- Precious Adeyemi</p>
                <p className="text-sm">Obafemi Awolowo University, OAU</p>
              </div>
            </div>
            <div className="p-8 w-full lg:w-[280px] bg-white border-[1px] border-black rounded-[8px] flex-grow-0 flex-shrink basis-[312px] flex flex-col justify-between text-[24px] leading-[133%] ">
              <p className="mb-[22px]">
                "From getting to meet and network with amazing people from all
                over the country, all the way to getting the opportunity to
                intern, the Klasha Campus Ambassador program is an awesome
                program with amazing benefits. "
              </p>
              <div className="flex flex-col space-y-3 items-start justify-start">
                <p>- Precious Adeyemi</p>
                <p className="text-sm">Obafemi Awolowo University, OAU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
