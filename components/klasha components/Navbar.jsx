import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const activeLink =
    'text-[#013220] bg-[#ace1af] text-sm rounded-full cursor-pointer block text-base leading-[1.6em] px-3 py-1 ';

  const normalLink =
    'block text-base text-black hover:text-[#0dbd8b] cursor-pointer leading-[1.6em] ';
  return (
    <div className="z-10 text-sm shadow-md w-full sticky top-0 left-0">
      <div className="md:flex  items-center justify-between bg-white py-5 md:px-12">
        <div className="md:flex text-sm items-center justify-start space-x-10">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <img
                alt="Collabbi"
                src="/images/collabbi-logo.png"
                className="inline-block max-w-full border-0 h-7"
              />
            </div>
          </Link>
          <Link href="/test" passHref>
            <a
              className={router.pathname === '/test' ? activeLink : normalLink}
            >
              <p className="text-sm">Colleges</p>
            </a>
          </Link>
          <Link href="/students" passHref>
            <a
              className={
                router.pathname === '/students' ? activeLink : normalLink
              }
            >
              <p className="text-sm">Students</p>
            </a>
          </Link>
          <Link href="/login" passHref>
            <a
              className={router.pathname === '/login' ? activeLink : normalLink}
            >
              <p className="text-sm">Login</p>
            </a>
          </Link>
        </div>
        <Link href="/invite" passHref>
          <button
            type="button"
            // onClick={() => setSignup(true)}
            className="font-semibold text-sm flex px-6 py-2 h-[2.375rem] justify-center items-center rounded-4xl bg-[#0dbd8b] text-white"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
