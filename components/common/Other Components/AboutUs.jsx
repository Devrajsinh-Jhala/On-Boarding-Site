import React from 'react';

// text-lg text-center  md:max-w-[850px] tracking-[-.015em] mb-8 leading-[1.875rem]
const AboutUs = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="220"
      className="bg-[#f6f1e1] flex flex-col items-center justify-center "
    >
      <p className=" md:max-w-[850px] mx-5  my-10  font-inter text-lg tracking-[-0.015em] leading-[1.875rem] text-center">
        As any recent grad can tell you, finding your first internship or first
        job after graduating college is hard. Without relevant job experience,
        it can be difficult to demonstrate your skills to a potential employer.
      </p>
      <p className=" md:max-w-[850px] mx-5 mb-10  font-inter text-lg tracking-[-0.015em] leading-[1.875rem] text-center">
        Introducing Hirable, a first kind of it's kind platform redefining the
        way hiring takes place by creating an ecosystem of opportunities and
        connecting your experiences to opportunities. This is the platform where
        you can show who you really are, and get hired for it.
      </p>
    </section>
  );
};

export default AboutUs;
