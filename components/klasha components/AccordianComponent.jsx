import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styles from '../../styles/student.module.css';

const AccordianComponent = ({ question, answer }) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleIsHidden = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="mx-auto max-w-[872px] mb-8  ">
      <div className=" outline-none border-b-[1px]  border-black ">
        {/* Question */}
        <div
          onClick={handleIsHidden}
          className="flex justify-between items-center cursor-pointer py-6 "
        >
          <div
            className={`max-w-[720px] ${styles.fontGazpacho} font-medium text-[20px] pr-[50px] lg:pr-0 lg:text-[20px] transition-all duration-1000 ease-in-out tracking-[-0.02em] leading-[140%] `}
          >
            {question}
          </div>
          <div>{isHidden ? <BsChevronDown /> : <BsChevronUp />}</div>
        </div>
        {/* Answer */}
        <div
          className={`h-auto  transition-[height] mb-6 duration-500 ${
            isHidden ? 'hidden' : 'block'
          } ease-in-out `}
        >
          <p className="mb-0 m-0 p-0 text-lg leading-[160%] lg:text-lg lg:tracking-[-0.015em] lg:leading-[1.875rem]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordianComponent;
