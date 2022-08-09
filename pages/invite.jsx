import Link from 'next/link';
import React from 'react';

function index() {
  return (
    <>
      <div className="flex w-screen h-screen overflow-y-hidden bg-white">
        <div
          className="w-[40%] flex flex-col justify-center !bg-bottom !bg-contain !bg-no-repeat"
          style={{
            background: '#eff2f6',
            backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
          }}
        >
          <div className="px-10">
            <h6
              className="my-6 text-2xl font-semibold"
              style={{ lineHeight: '1.875rem' }}
            >
              Create Your Profile
            </h6>
            <p
              className="mb-4 text-sm"
              style={{ color: '#788699', marginTop: '.7rem' }}
            >
              Share your story here.
            </p>
          </div>
        </div>
        <div className="w-[60%] self-center pt-24 pb-16 h-screen 2xl:h-[800px] 2xl:my-auto md:px-20 overflow-y-auto">
          {/*  */}
          <div className="w-full max-w-xl" style={{ color: '#141820' }}>
            <div className="self-center h-[60vh] overflow-y-auto">
              <div className="flex flex-col items-center max-w-xl">
                <div>
                  <div className="space-y-8 justify-start font-inter">
                    <div className="leading-[1.3rem] overflow-hidden">
                      Hey, Hirable is the world&apos;s first platform
                      exclusively built for students with the goal of connecting
                      student experiences to opportunities.
                    </div>
                    <div className="leading-[1.3rem] overflow-hidden">
                      We&apos;re still opening up for students from different
                      universities across the world. You can join with an invite
                      from your university career center or from an existing
                      user!
                      <br /> Sign up to take your career to the next level.
                    </div>
                    <div className="leading-[1.3rem]">
                      We can&apos;t wait to be a part of your success!
                    </div>
                  </div>
                  <input
                    id="inviteCode"
                    className=" w-full overflow-hidden sm:w-[200px] leading-[1.3rem] text-[14px] mt-5 tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[15px] h-[43px] "
                    type="text"
                    name="email"
                    placeholder="Invite Code"
                    maxLength={6}
                  />
                  <Link href="/signup">
                    <a>
                      <div className="mt-5 font-inter hover:bg-slate-700 bg-black hidden sm:block text-white rounded-md  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]">
                        Unlock Access
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
