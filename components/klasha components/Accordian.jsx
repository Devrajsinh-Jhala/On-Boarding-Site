import React from 'react';
import AccordianComponent from './AccordianComponent';
import styles from '../../styles/student.module.css';

const Accordian = () => {
  return (
    <div className="mt-20 pt-[144px] bg-white pb-[60px]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-[50px] w-full">
        <h1
          className={`text-center ${styles.fontGazpacho} mb-[60px] font-bold text-[40px] lg:text-[64px] leading-[110%] lg:leading-[120%] tracking-[-0.02em] `}
        >
          FAQs
        </h1>
        {/* Accordian */}
        <AccordianComponent
          question={'Why Hirable Campus CEO Programme?'}
          answer={
            'Hirable Campus CEO is a well curated programme designed to inculcate Entrepreneurial skills in you. You will have a sure shot chance to excel in team building, event management, community outreach and this would help give you more confidence. It would also help you build an influential personality that will make you shine in your professional career.'
          }
        />
        <AccordianComponent
          question={'What are the skills that I will develop?'}
          answer={
            'Apart from developing your leadership skills, you will also develop skills like Event Management, Influencer Marketing, Community Development, Brand Management and Social Media Marketing.'
          }
        />
        <AccordianComponent
          question={'How will this help build my CV?'}
          answer={
            'We nurture you to become an industry ready professional. You get regular Soft Skills, Management and Technical sessions to groom yourself in diverse areas of your personality. It also comes with a certificate that can be attached to your resume and if you perform really well, you get assured LinkedIn recommendation from Hirable official LinkedIn Page.'
          }
        />
        <AccordianComponent
          question={
            'What do you mean by Tasks? What are the types of tasks I need to perform?'
          }
          answer={
            'Tasks are a set of engaging activities designed in such a way that you can introduce students to our ideas  aimed at connecting student experiences to opportunities. You will also be a part of our fun social activities here. The major focus here is to educate the students about our ideas and helping them meet their professional goals with the help of our platform.'
          }
        />
        <AccordianComponent
          question={
            'My exams are on my head. I am not sure I will be able to devote this much time. How will this work?'
          }
          answer={
            'We can assure you that it is totally a time flexible programme. Tasks and activities are designed in such a way that nothing will feel hard and fast.'
          }
        />
        <AccordianComponent
          question={'Who can apply?'}
          answer={
            'Students from any college or university across the world who are having a zeal to learn new things and passionate about creating a true impact are welcome to apply.'
          }
        />
      </div>
    </div>
  );
};

export default Accordian;
