import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import styles from '../../styles/student.module.css';

import 'aos/dist/aos.css';

const amazone = require('../../public/logos/amazon.svg');
const apple = require('../../public/logos/apple.svg');
const careem = require('../../public/logos/careem.svg');
const deliveroo = require('../../public/logos/deliveroo.svg');
const discord = require('../../public/logos/discord.svg');
const goole = require('../../public/logos/goole.svg');
const grab = require('../../public/logos/grab.svg');
const jumia = require('../../public/logos/jumia.svg');
const klarna = require('../../public/logos/klarna.svg');
const lalamove = require('../../public/logos/lalamove.svg');
const meta = require('../../public/logos/meta.svg');
const microsoft = require('../../public/logos/microsoft.svg');
const noon = require('../../public/logos/noon.svg');
const nubank = require('../../public/logos/nubank.svg');
const rappi = require('../../public/logos/rappi.svg');
const shopee = require('../../public/logos/shopee.svg');
const spotify = require('../../public/logos/spotify.svg');
const talabat = require('../../public/logos/talabat.svg');
const tesla = require('../../public/logos/tesla.svg');
const tiktok = require('../../public/logos/tiktok.svg');

function Logos() {
  // const bankImages = [bankofamerica, wellsfargo, captialone, citi, rbc, td];
  const [allCompanies, setAllCompanies] = useState([
    amazone,
    apple,
    careem,
    deliveroo,
    discord,
    goole,
    grab,
    jumia,
    klarna,
    lalamove,
    meta,
    microsoft,
    noon,
    nubank,
    rappi,
    shopee,
    spotify,
    talabat,
    tesla,
    tiktok,
  ]);

  const [CompanyImages, setCompanyImages] = useState([
    amazone,
    apple,
    careem,
    deliveroo,
    discord,
    goole,
    grab,
    jumia,
    klarna,
    lalamove,
  ]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAllCompanies((pre) => {
        pre.unshift(pre.pop());
        return pre;
      });
      setCompanyImages((prev) => {
        prev[loop] = allCompanies[allCompanies.length - 1];
        return prev;
      });
      setLoop((prev) => {
        if (prev === 9) return 0;
        prev += 1;
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [loop, allCompanies]);
  return (
    <>
      <div
        className=" text-center pt-28 pb-16 sm-mid-tablet:pt-16 overflow-x-hidden"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <h3
          className={`leading-first tracking-[-1px] sm-mid-tablet:leading-snug ${styles.fontGazpacho} md:text-sec md:leading-sec font-body mb-8 font-semibold `}
          style={{
            fontSize: '30px',
            fontWeight: '700',
          }}
        >
          They can be your future employers
        </h3>

        <div className="flex-wrap justify-center">
          <div className="mx-auto w-4/5 lg-max:w-full lg-max:pl-2">
            <div className="grid grid-cols-5 grid-rows-2 text-center flex-wrap mid-lg:grid-cols-2 mid-lg:grid-rows-4 mid-lg:w-11/12 mid-lg:mx-auto sm-mid-max:w-full">
              {CompanyImages.slice(0, 10).map((img, index) => (
                <div
                  key={index}
                  className="flex flex-wrap flex-grow-0 flex-shrink mb-12 text-center m-5 w-[150px] h-[50px] justify-center mid-lg:mx-auto"
                >
                  <Image
                    className={loop === index ? 'fadeout' : 'fadein'}
                    src={img}
                    height="100%"
                    alt="Company"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logos;
