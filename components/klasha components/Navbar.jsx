import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const router = useRouter();
  const activeLink =
    'text-[#013220] bg-[#ace1af] text-sm rounded-full cursor-pointer block text-base leading-[1.6em] px-3 py-1 ';

  const normalLink =
    'block text-base text-black hover:text-[#0dbd8b] cursor-pointer leading-[1.6em] ';

  let Links = [
    { name: 'Colleges', links: '/colleges' },
    { name: 'Students', links: '/students' },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="z-10 text-sm shadow-md w-full sticky top-0 left-0">
      <div className="md:flex  items-center justify-between bg-white py-5 md:px-12">
        <div className="md:flex text-sm items-center justify-start space-x-10">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <img
                alt="hirable"
                src="/images/hirable logo (gradient).svg"
                className="inline-block max-w-full border-0 h-7"
              />
            </div>
          </Link>
          <div className="lg:flex lg:items-center lg:justify-between bg-white lg:py-5 lg:px-12 hidden">
            <Link href="/test" passHref>
              <a
                className={
                  router.pathname === '/test' ? activeLink : normalLink
                }
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
                className={
                  router.pathname === '/login' ? activeLink : normalLink
                }
              >
                <p className="text-sm">Login</p>
              </a>
            </Link>
          </div>
          <div className="lg:block hidden">
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
      </div>
      <div className="ml-auto lg:hidden">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl -mt-3 absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`lg:flex text-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full z-[-1] lg:pl-0  lg:w-auto items-center transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          } `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 text-base lg:my-0 my-7 font-inter"
            >
              <Link
                className="text-black hover:text-[#2536eb] font-semibold duration-500"
                href={link.links}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link href="/mobile" passHref>
            <div className="block text-base  mr-3 text-black cursor-pointer leading-[1.6em] ">
              Login
            </div>
          </Link>
          {/* <Link href="/invite" passHref>
                <div className=" text-base  bg-[#0dbd8b] md:my-0 my-7 mr-3 text-black cursor-pointer leading-[1.6em] ">
                  <p className="w-[200px]">Sign Up</p>
                </div>
              </Link> */}
          {/* Sign Up Button sliding left on setting width please look into it */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
