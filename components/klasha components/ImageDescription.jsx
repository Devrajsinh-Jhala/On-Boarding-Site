import React from 'react';
import Image from 'next/image';
// import BannerImage from '../../public/images/campus_ambassadors.png';
import BannerImage from '../../public/images/cheerful-university-students-with-study-books-look-down_88138-583.jpg';
import styles from '../../styles/student.module.css';

const ImageDescription = () => {
  return (
    <div className=" max-w-full lg:max-w-[1320px] mx-auto px-8 lg:px-[50px] my-20 w-full ">
      <div className="flex lg:flex-row flex-col justify-around items-start lg:items-center gap-6 lg:gap-[70px] ">
        <div className="block mx-auto overflow-hidden bg-none ">
          <Image
            width={'500px'}
            height={'390px'}
            src={BannerImage}
            className=""
            alt="Banner"
          />
        </div>
        <div>
          <h2
            className={` max-w-full ${styles.fontGazpacho} lg:max-w-[456px] mb-2 lg:mb-6 font-bold text-[30px] leading-[1.3em] sm-mid-tablet:leading-snug antialiased tracking-[-1px] `}
          >
            Develop a skill set that will advance your career
          </h2>
          <p className=" max-w-full lg:max-w-[376px] text-lg tracking-[-0.015em] leading-[1.875rem]">
            If you are a passionate individual with ambitious dreams and would
            like to work with talented and passionate students across the world,
            then this could be the right break for you. Empower your peers to
            meet their professional goals, while you develop essential skills
            for leadership, communication, and marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageDescription;
