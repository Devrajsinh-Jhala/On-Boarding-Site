import React from 'react';
import AccordianComponent from './AccordianComponent';
import styles from '../../styles/student.module.css';

const Accordian = () => {
  return (
    <div className="my-20 pt-[144px] bg-white pb-[60px]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-[50px] w-full">
        <h1
          className={`text-center ${styles.fontGazpacho} mb-[60px] font-medium text-[40px] lg:text-[64px] leading-[110%] lg:leading-[120%] tracking-[-0.02em] `}
        >
          FAQs
        </h1>
        {/* Accordian */}
        <AccordianComponent
          question={'Who can apply?'}
          answer={
            'Students from selected tertiary institutions across various African countries.'
          }
        />
        <AccordianComponent
          question={'Do I need any experience to take part?'}
          answer={
            'Not at all. You will be provided with all the information you need. You will also have access to our ambassador network on Telegram.'
          }
        />
        <AccordianComponent
          question={
            'If I have more enquiries about the programme, how do I reach out?'
          }
          answer={
            'If you have any other questions about this program, please feel free to send us an email atambassadors@klasha.com.'
          }
        />
      </div>
    </div>
  );
};

export default Accordian;
