import Link from 'next/link';
import React from 'react';
import styles from '../styles/student.module.css';

const mobile = () => {
  return (
    <div>
      <Link href="/" passHref>
        <div className="cursor-pointer px-4 py-4 md:px-8">
          <img
            alt="hirable"
            src="/images/hirable logo (gradient).svg"
            className="inline-block max-w-full border-0 h-7"
          />
        </div>
      </Link>

      <div className="mt-10 mx-5 flex flex-col items-start justify-start space-y-10">
        <h1
          className={`text-[30px] ${styles.fontGazpacho} font-extrabold tracking-normal leading-[1.375em] `}
        >
          Start your career with Hirable
        </h1>
        <p className="text-lg leading-[-0.015em] ">
          Hirable is here to help you find your dream job by connecting your
          experiences to opportunities.{' '}
        </p>
        <p className="text-lg leading-[-0.015em]">
          Hirable does not work in your mobile browser. Check out Hirable on
          your pc for a better user experience
        </p>
        <p className="text-lg leading-[-0.015em]">Launching mobile app soon</p>
      </div>
    </div>
  );
};

export default mobile;
