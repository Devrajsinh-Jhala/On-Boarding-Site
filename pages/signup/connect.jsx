import React from 'react';
import { RiLock2Line } from 'react-icons/ri';
import { BsGoogle } from 'react-icons/bs';

const connect = () => {
  return (
    <>
      <div className="flex h-[100%] ">
        <div className="flex w-screen h-screen overflow-y-hidden bg-white ">
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
          <div className=" flex flex-col mt-20 items-center justify-start w-[60%] ">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="font-inter text-lg font-bold text-blue-600">
                  Finish your registration
                </h1>
              </div>
              {/* Logo */}
              <div className="flex items-center justify-center space-x-5 mt-5">
                <svg
                  width="46"
                  height="37"
                  viewBox="0 0 33 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.736 18.136C31.9067 18.2213 32.0347 18.296 32.12 18.36C32.2267 18.424 32.28 18.52 32.28 18.648C32.28 18.904 32.0773 19.0213 31.672 19C31.3947 18.9787 31 18.9573 30.488 18.936C29.9973 18.9147 29.3787 18.904 28.632 18.904C27.864 18.904 27.224 18.9147 26.712 18.936C26.2 18.9573 25.816 18.9787 25.56 19C25.1547 19.0213 24.952 18.904 24.952 18.648C24.952 18.52 24.9947 18.424 25.08 18.36C25.1867 18.296 25.3253 18.2213 25.496 18.136C25.7947 18.0293 25.9867 17.8053 26.072 17.464C26.1573 17.1227 26.2 16.6747 26.2 16.12V7.992C26.2 7.24533 26.136 6.552 26.008 5.912C25.9013 5.25067 25.7093 4.68533 25.432 4.216C25.176 3.72533 24.8133 3.352 24.344 3.096C23.896 2.81867 23.32 2.68 22.616 2.68C21.912 2.68 21.304 2.84 20.792 3.16C20.3013 3.45867 19.896 3.85333 19.576 4.344C19.256 4.81333 19.0213 5.35733 18.872 5.976C18.744 6.57333 18.68 7.18133 18.68 7.8V7.96V16.12C18.68 16.6747 18.712 17.1227 18.776 17.464C18.8613 17.8053 19.0533 18.0293 19.352 18.136C19.5227 18.2213 19.6613 18.296 19.768 18.36C19.8747 18.424 19.928 18.52 19.928 18.648C19.928 18.904 19.7253 19.0213 19.32 19C19.0427 18.9787 18.648 18.9573 18.136 18.936C17.624 18.9147 16.9947 18.904 16.248 18.904C15.5013 18.904 14.872 18.9147 14.36 18.936C13.848 18.9573 13.4533 18.9787 13.176 19C12.7707 19.0213 12.568 18.904 12.568 18.648C12.568 18.52 12.6213 18.424 12.728 18.36C12.8347 18.296 12.9733 18.2213 13.144 18.136C13.4427 18.0293 13.624 17.8053 13.688 17.464C13.7733 17.1227 13.816 16.6747 13.816 16.12V7.96C13.816 7.21333 13.7627 6.52 13.656 5.88C13.5493 5.24 13.3573 4.68533 13.08 4.216C12.8027 3.72533 12.4293 3.352 11.96 3.096C11.512 2.81867 10.9467 2.68 10.264 2.68C9.56 2.68 8.952 2.84 8.44 3.16C7.94933 3.45867 7.544 3.85333 7.224 4.344C6.904 4.81333 6.66933 5.35733 6.52 5.976C6.37067 6.57333 6.296 7.18133 6.296 7.8V16.12C6.296 16.6747 6.33867 17.1227 6.424 17.464C6.50933 17.8053 6.70133 18.0293 7 18.136C7.17067 18.2213 7.29867 18.296 7.384 18.36C7.49067 18.424 7.544 18.52 7.544 18.648C7.544 18.904 7.34133 19.0213 6.936 19C6.68 18.9787 6.296 18.9573 5.784 18.936C5.272 18.9147 4.64267 18.904 3.896 18.904C3.128 18.904 2.488 18.9147 1.976 18.936C1.48533 18.9573 1.10133 18.9787 0.824 19C0.418667 19.0213 0.216 18.904 0.216 18.648C0.216 18.52 0.258667 18.424 0.344 18.36C0.450667 18.296 0.589333 18.2213 0.76 18.136C1.05867 18.0293 1.25067 17.8053 1.336 17.464C1.42133 17.1227 1.464 16.6747 1.464 16.12V5.464C1.464 4.90933 1.42133 4.472 1.336 4.152C1.25067 3.81067 1.05867 3.576 0.76 3.448C0.589333 3.384 0.450667 3.32 0.344 3.256C0.237333 3.17067 0.184 3.05333 0.184 2.904C0.184 2.66933 0.333333 2.52 0.632 2.456C1.10133 2.34933 1.76267 2.168 2.616 1.912C3.46933 1.656 4.39733 1.272 5.4 0.759998C5.76267 0.567998 5.96533 0.674665 6.008 1.08L6.232 3.672L6.264 3.992C6.47733 3.544 6.744 3.10667 7.064 2.68C7.384 2.232 7.77867 1.83733 8.248 1.496C8.71733 1.15467 9.26133 0.877333 9.88 0.664C10.52 0.450666 11.256 0.344 12.088 0.344C13.752 0.344 15.0747 0.664 16.056 1.304C17.0587 1.944 17.7733 2.936 18.2 4.28C18.392 3.832 18.648 3.37333 18.968 2.904C19.3093 2.43467 19.7253 2.01867 20.216 1.656C20.728 1.272 21.3253 0.962666 22.008 0.727999C22.712 0.471999 23.5333 0.344 24.472 0.344C26.776 0.344 28.44 0.984 29.464 2.264C30.5093 3.52267 31.032 5.432 31.032 7.992V16.12C31.032 16.6747 31.0747 17.1227 31.16 17.464C31.2453 17.8053 31.4373 18.0293 31.736 18.136Z"
                    fill="black"
                  />
                </svg>
                {/* Divider */}
                <div className="flex items-center justify-between">
                  <div className="w-[14px] h-[14px] rounded-full bg-blue-900" />
                  <div className="w-[50px] h-[4px] bg-blue-900" />
                  <div className="w-[14px] h-[14px] rounded-full bg-blue-900" />
                </div>
                <div className="text-[33px]">
                  <BsGoogle />
                </div>
              </div>

              <div className="mt-5">
                <h1 className="font-inter text-[15px] text-center font-bold text-black">
                  Why connect my Google account?
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="font-inter text-sm text-center px-10 lg:px-0 w-full lg:w-[400px]">
                  Your contact and calendar data helps us schedule meetings and
                  ensure that your matches are relevant (not matching you with
                  the people you already know, for instance).
                </h1>
              </div>

              <div className="text-2xl text-slate-300 mt-5 mb-3">
                <RiLock2Line />
              </div>

              <div className="mt-2">
                <h1 className="font-inter text-sm text-center px-10 lg:px-0 w-full lg:w-[400px]">
                  We're serious about your privacy and will never share your
                  private data with other users or third parties without your
                  consent.
                </h1>
              </div>

              <div className="py-3 px-2 cursor-pointer rounded-lg mt-5 w-fit h-fit bg-white border-2 flex items-center justify-between">
                <div className="text-gray-500">
                  <BsGoogle />
                </div>
                <p className="font-inter text-sm text-blue-500 ml-2 ">
                  Finish sign up with Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect;
