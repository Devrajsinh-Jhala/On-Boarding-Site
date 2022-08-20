import React from 'react';
import styles from '../../styles/student.module.css';

const AboutUs = () => {
  return (
    <div className="mt-10 max-w-[1320px] flex  items-center justify-center px-[50px] my-0 mx-auto w-full ">
      <div className="flex flex-col lg:flex-row space-between items-start  gap-[40px] ">
        {/* Heading */}
        <div className="lg:max-w-[520px] w-full">
          <h1
            className={`mb-[24px] ${styles.fontGazpacho} font-medium w-fit tracking-[-0.02em]  text-[48px] sm:text-[64px] 2xl:text-[74px] leading-[120%] 2xl:leading-[110%] `}
          >
            Borderless commerce for{' '}
            <span className="text-[#ef2c5a]">Africa</span>
          </h1>
          <div className="mt-5 text-center py-4 lg:px-7 px-6 lg:text-base text-sm inline-block cursor-pointer bg-black hover:bg-[#ef2c5a] text-white rounded-[8px] ">
            Read about our culture
          </div>
        </div>
        {/* Information */}
        <div className="lg:max-w-[560px] w-full">
          <p className="2xl:text-lg font-normal text-base leading-[180%] ">
            Klasha is a technology company that builds cross-border commerce
            solutions for African consumers and international businesses wanting
            to sell into Africa. Our mission is to make consumer goods and
            services online more accessible to customers across Africa. We've
            built the KlashaCheckout which allows African consumers to transact
            online across borders in local African currencies alongside an
            entire toolkit of software products including: KlashaWire,
            KlashaCargo, Payment Links and Klasha App.
          </p>
          <p className="2xl:text-lg font-normal mt-6 mb-10 text-base leading-[180%]">
            Our vision is for African consumers to have the same frictionless
            access to the goods they want, regardless of their geographic
            location, by transacting using African currencies and money methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
