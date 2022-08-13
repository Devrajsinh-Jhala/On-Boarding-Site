import React from 'react';
import styles from '../../../styles/student.module.css';

const DataComponent = ({ heading, description }) => {
  return (
    <div className="flex w-fit flex-col  ">
      <h3
        className={`text-[24px] leading-[34px] text-center font-bold tracking-[-0.015em] text-black mb-2 ${styles.fontGazpacho}  `}
      >
        {heading}
      </h3>
      <p className="text-[16px] font-regular leading-[24px] md:leading-[30px] md:text-[18px] tracking-[-.011em] antialiased text-[#1e1928cc]">
        {description}
      </p>
    </div>
  );
};

export default DataComponent;
