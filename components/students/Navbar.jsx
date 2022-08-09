import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const SignUp = dynamic(() => import('../../modals/signup'));

const Navbar = () => {
  const router = useRouter();
  const param = router.query.signup;
  useEffect(() => {
    if (param !== undefined) {
      setSignup(true);
      router.push('/', null, { shallow: true });
    }
  }, [param]);

  return (
    <>
      <nav className="top-0 sticky bg-white z-30 w-full h-18 border-b border-[#f9fafb] flex flex-col px-4 md:px-8 lg:px-12 justify-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <img
                alt="Collabbi"
                src="/images/collabbi-logo.png"
                className="inline-block max-w-full border-0 h-7"
              />
            </div>
          </Link>
          <div className="ml-auto flex space-x-4 items-center mid-lg:hidden">
            <Link href="/students" passHref>
              <div className="block text-base text-black cursor-pointer leading-[1.6em] ">
                Students
              </div>
            </Link>
            <Link href="/login" passHref>
              <div className="block text-base mr-3 text-black cursor-pointer leading-[1.6em] ">
                Login
              </div>
            </Link>
            <Link href="/invite" passHref>
              <button
                type="button"
                // onClick={() => setSignup(true)}
                className="font-semibold text-base flex px-6 py-2 h-[2.375rem] justify-center items-center rounded-4xl bg-[#0dbd8b] text-white"
              >
                Sign Up
              </button>
            </Link>
          </div>
          <div className="ml-auto hidden mid-lg:block">
            <Link href="/login" passHref>
              <div className="block text-base mr-3 text-black cursor-pointer leading-[1.6em] ">
                Login
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {/* IMPLEMENT MOBILE NAV HERE , Give some animation */}
    </>
  );
};

export default Navbar;
