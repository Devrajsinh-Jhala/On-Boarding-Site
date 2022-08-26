import React from 'react';
import styles from '../../styles/student.module.css';

function Statistics() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
        <h2
          className={`font-extrabold antialiased text-[40px] tracking-wider leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] text-center my-8 mb-16 max-w-2xl mx-auto ${styles.fontGazpacho}  `}
        >
          Good business outcomes, great human outcomes
        </h2>
        <div className="grid divide-y divide-[#d2cdca] md:grid-cols-3 md:divide-y-0 md:divide-x">
          <div className="flex-1 py-8 last:pb-0 md:px-10 md:py-12 md:first:pt-12 md:first:pl-0 md:last:pr-0">
            <div className="flex-1 ">
              <div
                className={`text-[64px] leading-[75px] md:text-[80px] md:leading-[90px] lg:text-e1 text-[#E7634c] font-bold ${styles.fontGazpacho}`}
              >
                70%
              </div>
              <div
                className={`text-[20px] leading-[34px] font-bold ${styles.fontGazpacho}`}
              >
                better spirits
              </div>
              <div className="mt-4 text-[#1e1928cc] ">
                The bereaved families we support consistently report improved
                outlook and mood.
              </div>
            </div>
          </div>
          <div className="flex-1 py-8 last:pb-0 md:px-10 md:py-12 md:first:pt-12 md:first:pl-0 md:last:pr-0">
            <div className="flex-1 ">
              <div
                className={`text-[64px] leading-[75px] md:text-[80px] md:leading-[90px] lg:text-e1 text-[#E7634c] font-bold ${styles.fontGazpacho}`}
              >
                75%
              </div>
              <div
                className={`text-[20px] leading-[34px] font-bold ${styles.fontGazpacho}`}
              >
                time back
              </div>
              <div className="mt-4 text-[#1e1928cc] ">
                Empathy takes tedious tasks off the family’s plate and saves
                them dozens of hours every month.
              </div>
            </div>
          </div>
          <div className="flex-1 py-8 last:pb-0 md:px-10 md:py-12 md:first:pt-12 md:first:pl-0 md:last:pr-0">
            <div className="flex-1 ">
              <div
                className={`text-[64px] leading-[75px] md:text-[80px] md:leading-[90px] lg:text-e1 text-[#E7634c] font-bold ${styles.fontGazpacho}`}
              >
                4.5/5⭑
              </div>
              <div
                className={`text-[20px] leading-[34px] font-bold ${styles.fontGazpacho}`}
              >
                average rating
              </div>
              <div className="mt-4 text-[#1e1928cc] ">
                Our users report that they feel heard, understood, and
                supported.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
