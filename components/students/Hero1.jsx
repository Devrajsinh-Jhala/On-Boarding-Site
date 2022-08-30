import React from 'react';
import styles from '../../styles/student.module.css';
import AboutUs from '../common/Other Components/AboutUs';
import Roles from './Roles';
import Footer from './Footer';

function Hero1() {
  return (
    <>
      {/* bg-[#f4efe9] */}
      <section className="bg-white ">
        <section className="relative py-8 md:py-12">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <div className="grid rounded-2xl pt-14 lg:min-h-[540px] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:py-0 lg:text-left bg-white text-center">
              <section
                data-aos="fade-right"
                data-aos-delay="440"
                className="px-5 sm:px-10 md:px-16 md:py-10 "
              >
                <h1
                  className={`font-black antialiased text-[40px] tracking-[-0.01em] leading-[50px] xl:text-[48px] xl:leading-[58px] md:whitespace-pre-wrap text-[#1E1928] ${styles.fontGazpacho} `}
                >
                  Get hired by companies looking for diverse talent
                </h1>
                <p className="font-normal   mb-4 text-[18px] tracking-[-0.015em] leading-[2rem] whitespace-pre-wrap py-4 md:mb-0 md:py-8 text-black">
                  We are creating a future where students are rewarded in the
                  pursuit of their career based on their abilities and
                  experience.
                </p>
                <button
                  type="button"
                  className="text-sm inline-flex cursor-pointer items-center justify-center text-center h-10 px-8 rounded-full text-white bg-[#1E1928] hover:bg-[#1E1928]/75"
                >
                  Get Started
                </button>
              </section>

              <div className="ml-5 h-fit flex-row justify-end flex">
                {/* <img
                  className="object-cover bg-bottom"
                  src="/images/student-hero.jpg"
                  alt=""
                /> */}
                <img
                  className="object-cover bg-bottom"
                  src="/images/dashboard-01.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <AboutUs />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="220"
          className="relative py-8 md:py-12"
        >
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <h2
              className={`font-bold antialiased text-[30px] tracking-[-1px] leading-[1.3em]  md:whitespace-pre-wrap text-black text-center my-8 max-w-2xl mx-auto ${styles.fontGazpacho} `}
            >
              Changing the way students connect with companies
            </h2>
            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:gap-x-8">
              <div>
                {/* bg-[#ede6dd] */}
                <div className="mb-4 h-full rounded-lg bg-white border-2 border-gray-400 py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                  <div className="md:mb-4 flex items-center justify-start md:justify-center">
                    <img
                      className="w-[60px] h-[60px] "
                      src="https://www.empathy.com/images/home/holistic_care.svg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`text-[24px] leading-[36px] font-bold tracking-tight md:text-[26px] md:leading-[42px] mb-2 md:mb-4 ${styles.fontGazpacho} `}
                  >
                    Startup Connect
                  </div>
                  <div className="text-lg antialiased tracking-tight font-normal text-black ">
                    Connect with local innovators and entrepreneurs to discover
                    the startups creating a difference
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4 h-full rounded-lg bg-white border-2 border-gray-400 py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                  <div className="md:mb-4 flex items-center justify-start md:justify-center">
                    <img
                      className="w-[60px] h-[60px] "
                      src="https://www.empathy.com/images/home/less_stress.svg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`text-[24px] leading-[36px] font-bold tracking-tight md:text-[26px] md:leading-[42px] mb-2 md:mb-4 ${styles.fontGazpacho} `}
                  >
                    Recruiter Connect
                  </div>
                  <div className="text-lg antialiased tracking-tight font-normal text-black ">
                    Connect with hiring managers and recruiters to find where
                    you belong
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4 h-full rounded-lg bg-white border-2 border-gray-400 py-8 px-6 md:py-16 md:pb-12 md:text-center lg:px-10">
                  <div className="md:mb-4 flex items-center justify-start md:justify-center">
                    <img
                      className="w-[60px] h-[60px] "
                      src="https://www.empathy.com/images/home/better_outcome.svg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`text-[24px] leading-[36px] font-bold tracking-tight md:text-[26px] md:leading-[42px] mb-2 md:mb-4 ${styles.fontGazpacho}  `}
                  >
                    TalentCon
                  </div>
                  <div className="text-lg antialiased tracking-tight font-normal text-black">
                    First of its kind hiring event that introduces the best
                    talents to companies by taking hiring to the next level
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          data-aos-delay="220"
          className="relative py-8 md:py-12"
        >
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <h2
              className={`font-bold antialiased text-[30px] tracking-[-1px] leading-[1.3em] md:whitespace-pre-wrap text-black  text-center my-8 mb-16 ${styles.fontGazpacho}  `}
            >
              Why Hirable?
            </h2>
            <div className="mx-auto grid gap-y-14 gap-x-32 sm:grid-cols-2 sm:gap-y-24 md:max-w-5xl">
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree1.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3
                    className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-black  mb-2 ${styles.fontGazpacho}  `}
                  >
                    Leadership as Experience
                  </h3>
                  <p className="text-[16px] font-normal md:leading-[30px] md:text-[18px] tracking-[-.015em] antialiased leading-[1.3rem] text-black ">
                    Student&apos;s volunteering activities have been of interest
                    to academics,but the impact of these activities on learning
                    and employability has been neglected. Through our platform
                    students can present that category of experience ina number
                    of ways and get rewarded with opportunities form companies.
                  </p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree2.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3
                    className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-black  mb-2 ${styles.fontGazpacho} `}
                  >
                    Companies apply to you
                  </h3>
                  <p className="text-[16px] font-normal md:leading-[30px] md:text-[18px] tracking-[-.015em] antialiased leading-[1.3rem] text-black ">
                    Gone are days when students apply to tens of companies and
                    sit for rounds of interviews giving assessments.On
                    Hirable,you don&apos;t need to apply to companies because
                    companies apply to you
                  </p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree3.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3
                    className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-black  mb-2 ${styles.fontGazpacho}  `}
                  >
                    Experience based hiring
                  </h3>
                  <p className="text-[16px] font-normal md:leading-[30px] md:text-[18px] tracking-[-.015em] antialiased leading-[1.3rem] text-black ">
                    On Hirable,you don&apos;t need to give rounds of interviews
                    and assessments to get selected for an internship orafull
                    time role.Instead,we simulate your experience for the role
                    you are interested to apply and depending on your
                    performance in the real time environment you will be
                    directly sent to the final round
                  </p>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-start md:flex-row">
                <div className="mr-8 w-10 md:w-auto">
                  <img src="https://www.empathy.com/images/tree4.svg" alt="" />
                </div>
                <div className="flex flex-1 flex-col self-start">
                  <h3
                    className={`text-[24px] leading-[34px] font-bold tracking-[-0.015em] text-black  mb-2 ${styles.fontGazpacho} `}
                  >
                    Right to opportunity
                  </h3>
                  <p className="text-[16px] font-normal md:leading-[30px] md:text-[18px] tracking-[-.015em] antialiased leading-[1.3rem] text-black ">
                    Education should not only give you knowledge but also an
                    experience and an opportunity to work with companies while
                    you are in college itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="220"
          className="relative mt-16 py-8 md:py-12"
        >
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <h2
              className={`font-bold antialiased text-[30px] tracking-[-1px] leading-[1.3em] md:whitespace-pre-wrap text-black  text-center my-8 mb-16 max-w-2xl mx-auto ${styles.fontGazpacho}  `}
            >
              Good business outcomes, great human outcomes
            </h2>
            <div className="grid divide-y divide-[#d2cdca] md:grid-cols-3 md:divide-y-0 md:divide-x">
              <div className="flex-1 py-8 last:pb-0 md:px-10 md:py-12 md:first:pt-12 md:first:pl-0 md:last:pr-0">
                <div className="flex-1 ">
                  <div
                    className={`text-[64px] leading-[75px] md:text-[80px] md:leading-[90px] lg:text-e1 text-[#E7634c] font-bold ${styles.fontGazpacho}`}
                  >
                    $300k
                  </div>
                  <div
                    className={`text-[20px] leading-[34px] font-bold ${styles.fontGazpacho}`}
                  >
                    CTC
                  </div>
                  <div className="mt-4 text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] ">
                    is the highest CTC being offered by the companies to
                    students on Hirable
                  </div>
                </div>
              </div>
              <div className="flex-1 py-8 last:pb-0 md:px-10 md:py-12 md:first:pt-12 md:first:pl-0 md:last:pr-0">
                <div className="flex-1 ">
                  <div
                    className={`text-[64px] leading-[75px] md:text-[80px] md:leading-[90px] lg:text-e1 text-[#E7634c] font-bold ${styles.fontGazpacho}`}
                  >
                    250+
                  </div>
                  <div
                    className={`text-[20px] leading-[34px] font-bold ${styles.fontGazpacho}`}
                  >
                    international opportunities
                  </div>
                  <div className="mt-4 text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] ">
                    Including full time roles, global residency programs,
                    graduate rotational programs, and more...
                  </div>
                </div>
              </div>
              <div className="flex-1 py-8 last:pb-0 md:px-10 md:py-12 md:first:pt-12 md:first:pl-0 md:last:pr-0">
                <div className="flex-1 ">
                  <div
                    className={`text-[64px] leading-[75px] md:text-[80px] md:leading-[90px] lg:text-e1 text-[#E7634c] font-bold ${styles.fontGazpacho}`}
                  >
                    5000+
                  </div>
                  <div
                    className={`text-[20px] leading-[34px] font-bold ${styles.fontGazpacho}`}
                  >
                    openings
                  </div>
                  <div className="mt-4 text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] ">
                    across experience enhancement programs to help you get
                    experience and get hired
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Roles />
        {/* 
        <section className="relative py-8 md:py-12">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
            <div className="no-scrollbar relative flex -mx-4 w-screen lg:mx-0 lg:w-auto">
              <div className="mx-auto flex w-fit flex-row">
                <div className="flex flex-col gap-y-6 px-4 md:flex-row md:gap-x-8 lg:px-0">
                  <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                      <img
                        className=""
                        src="https://www.empathy.com/_next/image?url=%2Fimages%2Ffeatured%2Flibrary%402x.png&w=1920&q=75"
                        alt=""
                      />
                    </div>
                    <div className="p-10">
                      <div className="text-[#1e1928cc] text-[18px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                        For Students
                      </div>
                      <p className="mt-4 text-[16px] leading-7 text-[#1e1928cc] font-normal">
                        We help candidates showcase their skills and experience
                        to employers as a way to get hired by connecting student
                        experiences to opportunities&nbsp;
                        <span className="whitespace-nowrap">-&gt;</span>
                      </p>
                    </div>
                  </a>
                  <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                      <img
                        className=""
                        src="https://www.empathy.com/_next/image?url=%2Fimages%2Ffeatured%2Fcod%402x.png&w=3840&q=75"
                        alt=""
                      />
                    </div>
                    <div className="p-10">
                      <div className="text-[#1e1928cc] text-[18px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                        For companies
                      </div>
                      <p className="mt-4 text-[16px] leading-7 text-[#1e1928cc] font-normal">
                        We partner with employers to help companies discover the
                        untapped talent and redefine the way hiring takes
                        place&nbsp;
                        <span className="whitespace-nowrap">-&gt;</span>
                      </p>
                    </div>
                  </a>
                  <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                      <img
                        className=""
                        src="https://www.empathy.com/_next/image?url=%2Fimages%2Ffeatured%2Fawards%402x.png&w=3840&q=75"
                        alt=""
                      />
                    </div>
                    <div className="p-10">
                      <div className="text-[#1e1928cc] text-[18px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                        For colleges
                      </div>
                      <p className="mt-4 text-[16px] leading-7 text-[#1e1928cc] font-normal">
                        We collaborate with colleges to transform the
                        educational opportunities and introduce student talents
                        to the industry&nbsp;
                        <span className="whitespace-nowrap">-&gt;</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section
          data-aos="fade-up"
          data-aos-delay="220"
          className="relative mx-auto mt-16 flex max-w-7xl pb-10"
        >
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
      </section>
      <Footer />
    </>
  );
}

export default Hero1;
