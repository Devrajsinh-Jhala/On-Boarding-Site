import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="relative bg-white">
        <h2 className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl py-16 px-8 lg:px-10 lg:py-16 ">
          <div className="flex grid-flow-col flex-col md:grid md:gap-8">
            <div className="col-span-2 grid grid-flow-col grid-cols-2 gap-y-10 gap-x-10 lg:grid-cols-3 ">
              <div>
                <h3 className="md:text-[18px] text-base tracking-[-0.014em] antialiased font-semibold leading-[24px] md:leading-[26px]">
                  Hirable
                </h3>
                <ul className="mt-4 space-y-3 md:space-y-4">
                  <li>
                    <Link href={'/students'} passHref>
                      <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                        For students
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      For companies
                    </a>
                  </li>
                  <li>
                    <Link href={'/colleges'} passHref>
                      <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                        For colleges
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="md:text-[18px] text-base tracking-[-0.014em] antialiased font-semibold leading-[24px] md:leading-[26px]">
                  Company
                </h3>
                <ul className="mt-4 space-y-3 md:space-y-4">
                  <li>
                    <Link href="/aboutus" passHref>
                      <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                        About
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row-span-2 md:row-span-1">
                <h3 className="md:text-[18px] text-base tracking-[-0.014em] antialiased font-semibold leading-[24px] md:leading-[26px]">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3 md:space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      Student Leaders
                    </a>
                  </li>
                  <li>
                    <Link href={'/campus-ambassadors'} passHref>
                      <div className="text-[14px] cursor-pointer leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased">
                        Campus Ambassadors
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[14px] leading-5 text-[#1e1928cc] hover:text-[#1e1928] md:text-[16px] md:leading-6 tracking-[-0.006em] md:-[-0.011em] antialiased"
                    >
                      Placement Coordinators
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-12 border-plum-16 md:hidden" />
            <div className="flex flex-col items-center md:items-end lg:flex-row lg:items-start lg:justify-end gap-2">
              <button
                id="newsletter__subscribe_open_modal"
                type="button"
                className="text-sm inline-flex cursor-pointer items-center justify-center text-center mb-6 xl:mb-0 xl:mr-4 h-10 px-8 rounded-full text-gray-100 bg-[#1e1928] hover:bg-[#4b4753] "
              >
                Subscribe to Our Newsletter
              </button>
              <div className="grid grid-cols-4 gap-4">
                <a href="#" className="rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#1E1928" />
                    <path
                      d="M23.7452 13.207C23.2761 13.4109 22.7727 13.5511 22.2438 13.6123C22.7842 13.2936 23.1971 12.7889 23.3934 12.1886C22.8784 12.4887 22.3166 12.6999 21.7314 12.8132C21.4853 12.5552 21.1892 12.35 20.8611 12.2102C20.5331 12.0704 20.18 11.9989 19.8235 12C18.3794 12 17.2094 13.1534 17.2094 14.5745C17.2094 14.7759 17.2324 14.9722 17.277 15.1608C16.2412 15.1116 15.2271 14.8471 14.2993 14.384C13.3715 13.921 12.5504 13.2697 11.8883 12.4716C11.6558 12.863 11.5334 13.31 11.534 13.7652C11.534 14.6574 11.9967 15.4476 12.6977 15.9077C12.2827 15.8947 11.8767 15.7842 11.5124 15.5852V15.6171C11.5163 16.2154 11.7275 16.7939 12.11 17.254C12.4925 17.7141 13.0227 18.0274 13.6102 18.1406C13.2245 18.2426 12.8209 18.2574 12.4287 18.1839C12.5997 18.6987 12.9267 19.1474 13.3643 19.4679C13.8019 19.7883 14.3284 19.9645 14.8707 19.9721C13.9403 20.6891 12.7979 21.0764 11.6232 21.0733C11.4129 21.0733 11.2052 21.0605 11 21.0376C12.1986 21.7963 13.5885 22.1981 15.0071 22.1961C19.8171 22.1961 22.4464 18.2732 22.4464 14.8702L22.4375 14.5363C22.9502 14.176 23.3933 13.7256 23.7452 13.207Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#1E1928" />
                    <path
                      d="M16.9981 13.4083C15.0106 13.4083 13.4065 15.0124 13.4065 17C13.4065 18.9876 15.0106 20.5917 16.9981 20.5917C18.9857 20.5917 20.5897 18.9876 20.5897 17C20.5897 15.0124 18.9857 13.4083 16.9981 13.4083ZM16.9981 19.3343C15.7128 19.3343 14.6638 18.2854 14.6638 17C14.6638 15.7146 15.7128 14.6657 16.9981 14.6657C18.2835 14.6657 19.3324 15.7146 19.3324 17C19.3324 18.2854 18.2835 19.3343 16.9981 19.3343ZM20.7368 12.4242C20.2728 12.4242 19.898 12.7989 19.898 13.263C19.898 13.727 20.2728 14.1018 20.7368 14.1018C21.2009 14.1018 21.5756 13.7288 21.5756 13.263C21.5758 13.1528 21.5542 13.0436 21.5121 12.9418C21.47 12.84 21.4082 12.7475 21.3303 12.6695C21.2523 12.5916 21.1598 12.5298 21.058 12.4877C20.9562 12.4456 20.847 12.424 20.7368 12.4242ZM23.9992 17C23.9992 16.0333 24.008 15.0754 23.9537 14.1105C23.8994 12.9898 23.6437 11.9951 22.8242 11.1756C22.0029 10.3543 21.01 10.1003 19.8893 10.0461C18.9226 9.99176 17.9648 10.0005 16.9999 10.0005C16.0332 10.0005 15.0754 9.99176 14.1105 10.0461C12.9897 10.1003 11.9951 10.356 11.1755 11.1756C10.3543 11.9969 10.1003 12.9898 10.0461 14.1105C9.99177 15.0772 10.0005 16.0351 10.0005 17C10.0005 17.9649 9.99177 18.9246 10.0461 19.8895C10.1003 21.0102 10.356 22.0049 11.1755 22.8244C11.9968 23.6457 12.9897 23.8997 14.1105 23.9539C15.0771 24.0082 16.035 23.9995 16.9999 23.9995C17.9665 23.9995 18.9244 24.0082 19.8893 23.9539C21.01 23.8997 22.0047 23.644 22.8242 22.8244C23.6455 22.0031 23.8994 21.0102 23.9537 19.8895C24.0097 18.9246 23.9992 17.9667 23.9992 17ZM22.4582 21.1293C22.3304 21.448 22.1763 21.6862 21.9294 21.9313C21.6824 22.1782 21.446 22.3324 21.1273 22.4602C20.2062 22.8262 18.019 22.7439 16.9981 22.7439C15.9772 22.7439 13.7883 22.8262 12.8672 22.4619C12.5484 22.3341 12.3103 22.18 12.0651 21.9331C11.8182 21.6862 11.6641 21.4498 11.5363 21.131C11.172 20.2082 11.2543 18.0209 11.2543 17C11.2543 15.9791 11.172 13.7901 11.5363 12.869C11.6641 12.5502 11.8182 12.3121 12.0651 12.0669C12.312 11.8218 12.5484 11.6659 12.8672 11.5381C13.7883 11.1738 15.9772 11.2561 16.9981 11.2561C18.019 11.2561 20.208 11.1738 21.1291 11.5381C21.4478 11.6659 21.6859 11.82 21.9311 12.0669C22.178 12.3138 22.3321 12.5502 22.46 12.869C22.8242 13.7901 22.7419 15.9791 22.7419 17C22.7419 18.0209 22.8242 20.2082 22.4582 21.1293Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#1E1928" />
                    <path
                      d="M15.2847 12.4687V14.2237H14V16.3687H15.2847V22.7451H17.9255V16.3687H19.697C19.697 16.3687 19.864 15.3402 19.9443 14.2148H17.9357V12.7491C17.9357 12.5286 18.2237 12.2342 18.5092 12.2342H19.9468V10H17.9905C15.2197 10 15.2847 12.1475 15.2847 12.4687Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="rounded-full">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#1E1928" />
                    <path
                      d="M17.53 17.7415V21.6728H16.2462L16.2481 21.2269C16.251 20.5024 16.2546 19.528 16.2569 18.529C16.2602 17.1421 16.2614 15.6844 16.2549 14.7917H17.53V15.0015L16.8604 16.0059H18.1656C17.9416 16.2492 17.7803 16.5248 17.6768 16.7822C17.5455 17.1068 17.53 17.4836 17.53 17.7415ZM19.8023 15.2937C19.5305 15.2937 19.2853 15.337 19.0656 15.4119C19.1967 15.2385 19.3507 15.074 19.5465 14.9384C19.8144 14.7529 20.2 14.5941 20.7916 14.5941C21.5409 14.5941 22.1271 14.8347 22.5318 15.2736C22.9419 15.7184 23.25 16.459 23.25 17.6167V21.6728H21.9641V17.9378C21.9641 17.3067 21.8548 16.6576 21.5062 16.1462C21.125 15.5869 20.5276 15.2937 19.8023 15.2937ZM11.75 11.4482C11.75 11.2342 11.8278 11.0728 11.9456 10.9617C12.0648 10.8493 12.2674 10.75 12.5769 10.75C12.885 10.75 13.075 10.8478 13.1858 10.9551C13.2968 11.0624 13.3786 11.2273 13.3856 11.4563C13.3836 11.662 13.3082 11.8225 13.1924 11.9337C13.0757 12.0458 12.8751 12.1477 12.5587 12.1477H12.5405C12.0021 12.1477 11.75 11.8223 11.75 11.4482ZM13.2023 14.7917V21.6728H11.9151V14.7917H13.2023Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="-mx-8 -mb-16 mt-10 w-screen bg-plum-8 px-8 py-8 pb-16 md:m-0 md:w-auto md:bg-transparent md:p-0">
            <div className="flex-row md:mt-28 md:flex md:items-start md:justify-between">
              <p className="text-[#1e1928a3] leading-[22px] tracking-[-0.006em] mb-8 max-w-lg text-sm md:mb-0 lg:max-w-2xl">
                We are creating a future where students are rewarded in the
                pursuit of their career based on their abilities and experience.
              </p>
            </div>
            <div className="text-[#1e1928a3] text-sm font-light flex flex-col justify-between pt-20 text-plum-64 md:pt-4 lg:flex-row">
              <span className="block font-medium">India</span>© 2022 hirable.
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
