import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/student.module.css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, EffectCreative } from 'swiper';

function Roles() {
  const roles = [
    "Founder's Associate",
    'Community Manager',
    'Influencer Marketing Specialist',
  ];

  const [change, setChange] = useState(0);
  useEffect(() => {}, [change]);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="220"
      className="relative mt-16 py-8 md:py-12"
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
        <h2
          className={`font-semibold antialiased text-[30px] tracking-[-1px] leading-[1.3em] md:whitespace-pre-wrap text-black  text-center my-8 mb-2 max-w-2xl mx-auto ${styles.fontGazpacho}  `}
        >
          Get Hired as <strong>{roles[change]}</strong>
        </h2>
        <div className="mt-4 text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] max-w-2xl mx-auto text-center">
          Lots of our grads aren’t 100% sure which role they’d want, while
          others have a very specific idea of what they want to do. Either way -
          we can help! A core part of our training is to help you figure out
          which role and startup would suit you best.
        </div>
      </div>
      <section className="mx-auto ">
        <Swiper
          grabCursor
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-150%', 0, -500],
            },
            next: {
              shadow: true,
              translate: ['150%', 0, -500],
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          allowTouchMove={false}
          loop
          modules={[Navigation, EffectCreative]}
          className="mySwiper w-full relative"
        >
          <SwiperSlide className="select-none">
            <a className="mb-8 w-full px-4 lg:mb-0">
              <div className="mx-auto mb-2 max-w-5xl h-[400px] rounded-[36px] bg-gray-100 p-10">
                <h5
                  className={`font-bold antialiased text-[30px] tracking-[-1px] leading-[1.3em] md:whitespace-pre-wrap text-black  text-center mb-2 max-w-2xl mx-auto ${styles.fontGazpacho} `}
                >
                  Founder&apos;s Associate
                </h5>
                <p className="text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] antialiased mb-2">
                  Founder’s Associates are generalists who work directly with a
                  startup founder on strategic initiatives, marketing,
                  operations, sales and much more. This role is an exceptional
                  opportunity for anyone keen to quickly climb the ranks and
                  form part of the senior leadership team within a couple of
                  years.
                </p>
                <div className="text-[14px] text-center w-[150px] font-medium mx-auto leading-[25px] text-blue-500 bg-blue-500 bg-opacity-25 rounded-md mb-2">
                  Founder&apos;s Associate
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="select-none">
            <a className="mb-8 w-full px-4 lg:mb-0">
              <div className="mx-auto mb-2 max-w-5xl h-[400px] rounded-[36px] bg-gray-100 p-10">
                <h5
                  className={`font-bold antialiased text-[30px] tracking-[-1px] leading-[1.3em] md:whitespace-pre-wrap text-black  text-center mb-2 max-w-2xl mx-auto ${styles.fontGazpacho} `}
                >
                  Community Manager
                </h5>
                <p className="text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] mb-2 antialiased">
                  A community manager helps build, grow and manage a company’s
                  or brand’s online communities. Using analytics tools to
                  monitor social media outlets, online forums and blogs, a
                  community manager finds out what people are saying about a
                  company or brand. A community manager also engages with
                  customers and fans, and uses social media and live events to
                  help increase brand loyalty. If you are someone with a passion
                  for building communities and enthusiasm for working with
                  diverse communities, you might like a Community Manager role.
                </p>
                <div className="text-[14px] text-center w-[150px] font-medium mx-auto leading-[25px] text-green-500 bg-green-500 bg-opacity-25 rounded-md mb-2">
                  Community Manager
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="select-none">
            <a className="mb-8 w-full px-4 lg:mb-0">
              <div className="mx-auto mb-2 max-w-5xl h-[400px] rounded-[36px] bg-gray-100 p-10">
                <h5
                  className={`font-bold antialiased text-[30px] tracking-[-1px] leading-[1.3em] md:whitespace-pre-wrap text-black  text-center mb-2 max-w-2xl mx-auto ${styles.fontGazpacho} `}
                >
                  Influencer Marketing Specialist
                </h5>
                <p className="text-black text-[1.125rem] tracking-[-0.015em] leading-[1.875rem] mb-2 antialiased">
                  Influencer marketing is a relatively new form of marketing
                  that focuses on identifying and leveraging relationships with
                  individuals who have influence over others’ purchasing
                  decisions. These “influencers” can be bloggers, celebrities,
                  social media stars, etc., but they all share one common trait:
                  their followers trust them and value their opinions.
                  Influencer marketing specialists work to identify the right
                  influencers for their clients’ brands and products, develop
                  relationships with those influencers, and create campaigns
                  that effectively reach their target audiences. If you are a
                  digital savvy, who loves working with influencers and using
                  social media, this role is for you
                </p>
                <div className="text-[14px] text-center w-[250px] font-medium mx-auto leading-[25px] text-red-500 bg-red-500 bg-opacity-25 rounded-md mb-2">
                  Influencer Marketing Specialist
                </div>
              </div>
            </a>
          </SwiperSlide>

          <div
            onClick={() =>
              setChange(change <= 0 ? roles.length - 1 : change - 1)
            }
            ref={navigationPrevRef}
            className="absolute top-[175px] left-8 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="w-16 h-16 border-2 flex-initial text-black hover:bg-black transition duration-300 delay-100 ease-in-out hover:text-white border-black rounded-full p-2"
            >
              <path
                fill="currentColor"
                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                data-name="Left"
              />
            </svg>
          </div>
          <div
            onClick={() =>
              setChange(change >= roles.length - 1 ? 0 : change + 1)
            }
            ref={navigationNextRef}
            className="absolute top-[175px] right-8 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="rotate-180 w-16 h-16 border-2 flex-initial text-black hover:bg-black transition duration-300 delay-100 ease-in-out hover:text-white border-black rounded-full p-2"
            >
              <path
                fill="currentColor"
                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                data-name="Left"
              />
            </svg>
          </div>
        </Swiper>
      </section>
    </section>
  );
}

export default Roles;
