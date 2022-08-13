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
          <div className="ml-auto md:flex space-x-4 items-center hidden">
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
          <div className="ml-auto md:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl -mt-3 absolute right-8 top-6 cursor-pointer md:hidden"
            >
              {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <ul
              className={`md:flex text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full z-[-1] md:pl-0  md:w-auto items-center transition-all duration-500 ease-in ${
                open ? 'top-20' : 'top-[-490px]'
              } `}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-base md:my-0 my-7 font-inter"
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
      </nav>
      {/* IMPLEMENT MOBILE NAV HERE , Give some animation */}
    </>
  );
};

export default Navbar;
