import React from 'react';
import styles from '../../styles/student.module.css';

function CallforAction() {
  return (
    <section className="relative mx-auto flex max-w-7xl pb-10">
      <div className="relative mx-auto flex w-full bg-[#1e1928] flex-col self-center rounded-lg  text-white px-6 py-16 sm:px-8 md:py-20 md:mx-4">
        <div className="text-center flex flex-col mx-auto max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-y-4 text-center">
            <h3
              className={`font-bold antialiased text-[40px] tracking-tighter leading-[50px] md:whitespace-pre-wrap text-white text-center ${styles.fontGazpacho}  `}
            >
              Bring Empathy to your company
            </h3>
            <p className="text-lg tracking-tighter ">
              Everyone deserves help after loss. Join us to find the support
              your families need.
            </p>
            <button
              type="button"
              className=" text-sm min-w-36 inline-flex cursor-pointer items-center justify-center text-center mt-6 h-10 px-8 rounded-full border hover:bg-[#1e192817]"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallforAction;
