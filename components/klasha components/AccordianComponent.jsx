import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

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
          <div className="max-w-[720px] text-24px pr-[50px] lg:pr-0 lg:text-[40px] transition-all duration-1000 ease-in-out tracking-[-0.02em] leading-[110%] ">
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
          <p className="mb-0 m-0 p-0 text-base leading-[160%] ">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordianComponent;
