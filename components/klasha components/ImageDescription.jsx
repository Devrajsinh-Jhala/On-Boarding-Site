import React from 'react';
import Image from 'next/image';
import BannerImage from '../../public/images/campus_ambassadors.png';
import styles from '../../styles/student.module.css';

const ImageDescription = () => {
  return (
    <div className=" max-w-full lg:max-w-[1320px] mx-auto px-8 lg:px-[50px] my-20 w-full ">
      <div className="flex lg:flex-row flex-col justify-around items-start lg:items-center gap-6 lg:gap-[100px] ">
        <div className="block mx-auto overflow-hidden bg-none ">
          <Image
            width={'584px'}
            height={'500px'}
            src={BannerImage}
            className=""
            alt="Banner"
          />
        </div>
        <div>
          <h2
            className={` max-w-full ${styles.fontGazpacho} lg:max-w-[456px] mb-2 lg:mb-6 font-medium text-[40px] lg:text-[60px] leading-[110%] lg:leading-[120%] tracking-[-0.02em] `}
          >
            Develop a skill set that will advance your career
          </h2>
          <p className=" max-w-full lg:max-w-[376px] text-base leading-[160%]">
            Join your peers across various campuses in Africa to build relevant
            skill sets via our task-oriented campus ambassador program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageDescription;
