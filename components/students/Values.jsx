import React from 'react';
import styles from '../../styles/student.module.css';

function Values() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
        <h2
          className={`font-extrabold antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] text-center my-8 mb-16 ${styles.fontGazpacho}  `}
        >
          Core values
        </h2>
        <div className="mx-auto grid gap-y-14 gap-x-32 sm:grid-cols-2 sm:gap-y-24 md:max-w-5xl">
          <div className="flex max-w-lg flex-col items-start md:flex-row">
            <div className="mr-8 w-10 md:w-auto">
              <img src="https://www.empathy.com/images/tree1.svg" alt="" />
            </div>
            <div className="flex flex-1 flex-col self-start">
              <h3
                className={`text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2 ${styles.fontGazpacho}  `}
              >
                Leadership as Experience
              </h3>
              <p className="text-[16px] font-medium leading-[24px] md:leading-[30px] md:text-[18px] tracking-wide antialiased text-[#1e1928cc]">
                Students&apos;volunteering activities have been of interest to
                academics,but the impact of these activities on learning and
                employability has been neglected. Through our platform students
                can present that category of experience ina number of ways and
                get rewarded with opportunities form companies.
              </p>
            </div>
          </div>
          <div className="flex max-w-lg flex-col items-start md:flex-row">
            <div className="mr-8 w-10 md:w-auto">
              <img src="https://www.empathy.com/images/tree2.svg" alt="" />
            </div>
            <div className="flex flex-1 flex-col self-start">
              <h3
                className={`text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2 ${styles.fontGazpacho} `}
              >
                Companies apply to you
              </h3>
              <p className="text-[16px] leading-[24px] font-medium md:leading-[30px] md:text-[18px] tracking-tight antialiased text-[#1e1928cc]">
                Gone are days when students apply to tens of companies and sit
                for rounds of interviews giving assessments.On Hirable,you
                don&apos;t need to apply to companies because companies apply to
                you
              </p>
            </div>
          </div>
          <div className="flex max-w-lg flex-col items-start md:flex-row">
            <div className="mr-8 w-10 md:w-auto">
              <img src="https://www.empathy.com/images/tree3.svg" alt="" />
            </div>
            <div className="flex flex-1 flex-col self-start">
              <h3
                className={`text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2 ${styles.fontGazpacho}  `}
              >
                Experience based hiring
              </h3>
              <p className="text-[16px] leading-[24px] font-medium md:leading-[30px] md:text-[18px] tracking-tight antialiased text-[#1e1928cc]">
                On Hirable,you don&apos;t need to give rounds of interviews and
                assessments to get selected for an internship orafull time
                role.Instead,we simulate your experience for the role you are
                interested to apply and depending on your performance in the
                real time environment you will be directly sent to the final
                round
              </p>
            </div>
          </div>
          <div className="flex max-w-lg flex-col items-start md:flex-row">
            <div className="mr-8 w-10 md:w-auto">
              <img src="https://www.empathy.com/images/tree4.svg" alt="" />
            </div>
            <div className="flex flex-1 flex-col self-start">
              <h3
                className={`text-[24px] leading-[34px] font-bold tracking-wide text-[#1E1928] mb-2 ${styles.fontGazpacho} `}
              >
                Right to opportunity
              </h3>
              <p className="text-[16px] leading-[24px] font-medium md:leading-[30px] md:text-[18px] tracking-tight antialiased text-[#1e1928cc]">
                Education should not only give you knowledge but also an
                experience and an opportunity to work with companies while you
                are in college itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
