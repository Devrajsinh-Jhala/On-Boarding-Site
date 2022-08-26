import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import InputError from '../components/common/InputError';
import InputMessage from '../components/common/InputMessage';
import { invite } from '../store/slices/user';

function Invite() {
  const dispatch = useDispatch();
  const [inviteCode, setInviteCode] = useState('');
  const [checkInvite, setCheckInvite] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.querySelector('#inviteCode').focus();
  }, []);

  function checkInvitCode() {
    if (inviteCode.length === 6) {
      console.log(inviteCode);
      if (error) {
        setError(false);
      }
      setCheckInvite(true);
      setTimeout(() => {
        setChecking(false);
        setTimeout(() => {
          dispatch(invite(inviteCode));
          router.push('/signup');
        }, 400);
      }, 1400);
    } else {
      setError(true);
    }
  }

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
        <div className="w-[60%] self-center pt-32 pb-16 h-screen 2xl:h-[800px] 2xl:my-auto md:px-20 overflow-y-auto">
          {/*  */}
          <div className="w-full max-w-xl" style={{ color: '#141820' }}>
            <div className="self-center h-[60vh]">
              <div className="flex flex-col items-center max-w-[500px]">
                <div>
                  <div className="space-y-8 justify-start font-inter">
                    <div>
                      <div className="">
                        <img
                          alt="hirable"
                          src="/images/hirable logo (gradient).svg"
                          className="inline-block max-w-full border-0 h-7"
                        />
                      </div>
                    </div>
                    <div className="leading-[1.5rem] text-[15px] overflow-hidden">
                      Hey, Hirable is the world&apos;s first platform
                      exclusively built for students with the goal of connecting
                      student experiences to opportunities.
                    </div>
                    <div className="leading-[1.5rem] text-[15px] overflow-hidden">
                      We&apos;re still opening up for students from different
                      universities across the world. You can join with an invite
                      from your university career center or from an existing
                      user!
                      <br /> Sign up to take your career to the next level.
                    </div>
                    <div className="leading-[1.5rem] text-[15px]">
                      We can&apos;t wait to be a part of your success!
                    </div>
                  </div>
                  <input
                    id="inviteCode"
                    onChange={(e) => setInviteCode(e.target.value)}
                    value={inviteCode}
                    className=" w-full overflow-hidden sm:w-[200px] leading-[1.3rem] text-[14px] mt-5 tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg mb-2  focus:outline-none py-[15px] h-[43px] "
                    type="text"
                    name="invite"
                    placeholder="Invite Code"
                    maxLength={6}
                  />
                  {checkInvite && (
                    <InputMessage message="checking" loading={checking} />
                  )}
                  {error && <InputError error="Invalid Invite Code" />}

                  <button
                    type="button"
                    onClick={checkInvitCode}
                    className="mt-5 font-inter hover:bg-slate-700 bg-black hidden sm:block text-white rounded-md  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]"
                  >
                    Unlock Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invite;
