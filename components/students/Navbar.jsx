import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  let Links = [
    { name: 'Colleges', links: '/colleges' },
    { name: 'Students', links: '/students' },
  ];

  let [open, setOpen] = useState(false);
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
          <div className=" pl-10 lg:flex space-x-4 items-center w-full justify-between hidden">
            <div className="lg:flex space-x-4 items-center justify-start">
              <Link href="/colleges" passHref>
                <div className="block text-base text-black cursor-pointer leading-[1.6em] ">
                  Colleges
                </div>
              </Link>
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
            </div>
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
          <div className="ml-auto lg:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl  absolute right-8 top-6 cursor-pointer lg:hidden"
            >
              {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <ul
              className={`lg:flex text-left pl-10 lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full z-[-1] lg:pl-0  lg:w-auto items-center transition-all duration-500 ease-in ${
                open ? 'top-20 left-0' : 'top-20 left-[150%]'
              } `}
            >
              <div className="flex items-center space-x-18">
                {Links.map((link) => (
                  <div className="">
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
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-start space-y-10">
                <Link href="/mobile" passHref>
                  <div className="block text-base  mr-3 text-black cursor-pointer leading-[1.6em] ">
                    Login
                  </div>
                </Link>
                <Link href="/invite" passHref>
                  <div className="font-semibold text-base text-center w-[110px] flex px-6 py-2 h-[2.375rem]  rounded-full bg-[#0dbd8b] text-white">
                    <p className="text-center">Sign Up</p>
                  </div>
                </Link>
              </div>
              {/* Sign Up Button sliding left on setting width please look into it */}
            </ul>
          </div>
        </div>
      </nav>
      {/* IMPLEMENT MOBILE NAV HERE , Give some animation */}
    </>
  );
};

export default Navbar;
