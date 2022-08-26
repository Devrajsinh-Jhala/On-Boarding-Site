import React from 'react';
import styles from '../../styles/student.module.css';

function Connect() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
        <h2
          className={`font-extrabold antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] text-center my-8 max-w-2xl mx-auto ${styles.fontGazpacho} `}
        >
          Changing the way students connect with companies
        </h2>
        <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:gap-x-8">
          <div>
            <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
              <div className="md:mb-4 flex items-center justify-start md:justify-center">
                <img
                  className="w-[60px] h-[60px] "
                  src="https://www.empathy.com/images/home/holistic_care.svg"
                  alt=""
                />
              </div>
              <div
                className={`text-[24px] leading-[36px] font-bold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4 ${styles.fontGazpacho} `}
              >
                Startup Connect
              </div>
              <div className="text-lg antialiased tracking-tight font-medium text-[#1e1928cc] ">
                Connect with local innovators and entrepreneurs to discover the
                startups creatingadifference
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
              <div className="md:mb-4 flex items-center justify-start md:justify-center">
                <img
                  className="w-[60px] h-[60px] "
                  src="https://www.empathy.com/images/home/less_stress.svg"
                  alt=""
                />
              </div>
              <div
                className={`text-[24px] leading-[36px] font-bold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4 ${styles.fontGazpacho} `}
              >
                Recruiter Connect
              </div>
              <div className="text-lg antialiased tracking-tight font-medium text-[#1e1928cc] ">
                Connect with hiring managers and recruiters to find where you
                belong
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 h-full rounded-lg bg-[#ede6dd] py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
              <div className="md:mb-4 flex items-center justify-start md:justify-center">
                <img
                  className="w-[60px] h-[60px] "
                  src="https://www.empathy.com/images/home/better_outcome.svg"
                  alt=""
                />
              </div>
              <div
                className={`text-[24px] leading-[36px] font-bold tracking-tight md:text-[32px] md:leading-[42px] mb-2 md:mb-4 ${styles.fontGazpacho}  `}
              >
                TalentCon
              </div>
              <div className="text-lg antialiased tracking-tight font-medium text-[#1e1928cc] ">
                First of its kind hiring event that introduces the best talents
                to companies by taking hiring to the next level
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
