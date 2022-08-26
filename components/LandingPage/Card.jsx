import React from 'react';

function Card() {
  return (
    <>
      <section className="relative py-8 md:py-12">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-4">
          <div className="no-scrollbar relative flex -mx-4 w-screen lg:mx-0 lg:w-auto">
            <div className="mx-auto flex w-fit flex-row">
              <div className="flex flex-col gap-y-6 px-4 md:flex-row md:gap-x-8 lg:px-0">
                <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                  <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                    <img className="" src="/images/1.png" alt="" />
                  </div>
                  <div className="p-10">
                    <div className="text-[#1e1928cc] text-[16px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                      For Students
                    </div>
                    <p className="mt-4 text-[#1e1928cc] font-medium">
                      We help candidates showcase their skills and experience to
                      employers as a way to get hired by connecting student
                      experiences to opportunities&nbsp;
                      <span className="whitespace-nowrap">-&gt;</span>
                    </p>
                  </div>
                </a>
                <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                  <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                    <img className="" src="/images/2.png" alt="" />
                  </div>
                  <div className="p-10">
                    <div className="text-[#1e1928cc] text-[16px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                      For companies
                    </div>
                    <p className="mt-4 text-[#1e1928cc] font-medium">
                      We partner with employers to help companies discover the
                      untapped talent and redefine the way hiring takes
                      place&nbsp;
                      <span className="whitespace-nowrap">-&gt;</span>
                    </p>
                  </div>
                </a>
                <a className="group block h-full w-full min-w-[320px] flex-1 cursor-pointer overflow-hidden rounded-xl bg-white text-plum-80 shadow hover:shadow-md">
                  <div className="relative h-[200px] w-full md:h-[225px] overflow-hidden">
                    <img className="" src="/images/3.png" alt="" />
                  </div>
                  <div className="p-10">
                    <div className="text-[#1e1928cc] text-[16px] leading-6 md:leading-7 md:text-lg antialiased tracking-tight font-bold">
                      For colleges
                    </div>
                    <p className="mt-4 text-[#1e1928cc] font-medium">
                      We collaborate with colleges to transform the educational
                      opportunities and introduce student talents to the
                      industry&nbsp;
                      <span className="whitespace-nowrap">-&gt;</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
