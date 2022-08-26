import React from 'react';
import classNames from '../../utils/constants/classNames';

function finishRegistration() {
  return (
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
      <div className="w-[60%] self-center px-4 py-6 overflow-y-scroll h-full md:px-20 2xl:h-[800px] 2xl:my-auto">
        <div className="w-full h-fit my-auto pt-12">
          <div className="max-w-xl">
            <div
              className={classNames(
                'flex flex-col items-center justify-center'
              )}
            >
              <div>
                <h1 className="font-inter text-lg font-bold text-black">
                  Finish your registration
                </h1>
              </div>

              <p className="mt-4 text-base text-center">
                Your contact and calendar data helps us with relevant company
                recommendations as well as schedule meetings with companies and
                ensure that your recommendations are relevant
              </p>
              <div className="text-2xl text-slate-300 mt-5 mb-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-base text-center">
                We&apos;re serious about your privacy and will never share your
                private data with other users or third parties without your
                consent
              </p>

              <button
                type="button"
                className={classNames(
                  'my-6 md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm  px-3 py-2.5 text-sm text-signup-blue'
                )}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAMAAAClD0MEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGSUExURQAAAP+/AECA7zCfUN9AQN9AMPe/APe3CO+AIECH70CA7zCnUOdIMOdAOPq6BUCF9DWqUDWlVepFNepFMOpANfu7BPebEECD8zSnVDSnUOdENOtANPy+A0CE9fy8A0OD8jOmU+lDNulDMzapUzOpU+xDNulDNvq9A0KF8jKnUupCMjOqU+pDNfi7BUKE9DSoUjKmVDSpUutENOtCNvm7BEKD8zSnVOlENOlCNkKG9DSoUutENfq8Bfq8BEGD8zOmUzOmUehDNUKF9DOoU+pDNfq6BUGE8jOnU+lDNfu8BEKG8zeffzSpUzSnU+lDNkGF8/u8BUOE9EGF9DSoU+pDNepDNPu8BUGF9DSnUupENelCNfq9BUKF9ECK3UGF9DOoU+pDNelCNfu8BUKF9DSoUzOoU+tDNOpDNfu8Be66CeK5DvmtC9a4E8m3GPaWFKSzKPSHGpeyLPOAHYuxMfF4IHOuOu9pJlmrRE2qSUGpTkCK4EKF9D+M1kGH6j2StzmbjzuWozakZ+xSLzWmXTSoU+pDNcRMx+0AAABodFJOUwAQEBAQECAgICAgICAgMDAwMDAwMEBAQEBAQEBPT1BQUFBQX19fX2BgYGBvb3BwcHB/f3+AgICAgI+Pj5CQkJCQkJ+fn6CgoKCvr6+vr6+wv7+/v7+/z8/Pz8/f39/f39/f7+/v7+/vEvGb2gAAAi1JREFUeNrN1elf0zAYB/DHTVRkU1Fx3TxRJ6ICTgW85wTcxGu6TUUGHSoziveNUYGZ/N9+2tE2ydI07ccX/t416XdPzhXgP0jXicLdRpNS2pypFrK7NdHZKuXTmAyme0XUTjWrVLvkyi66UzFCqsqlLjlLzFB1GgnpzJo0KC8Od7Is1UjpX7H+aCzRjMSgIb5TG88kAWBj5lRNwc4IajLDdCZLfizBqycZoT9ZkzIocawgeWNcxvZ8Ztl57ds2hd5HYZsQQkstZ0X0L/cQsuBXmy0k9d1DZOej5Y5BqGHaeduiCyH+gw44Di21QpSDK8jLFr5r+6hfDgKUPVYWfvI49ss9d1msXNZ2dYCnnhsK45jp7dN2mHN9EV2oesz8BsK42SjriQFuRtm/On9eNui6+wADrnr5ZYR33SkuDzx3FWCzw15/JxXlSa57bhjchXm3TAgxFCzFjDMFAOfsMX4iVsy4v7vhsWfW8zaE0KtvpJ2LvqybKXfdbimjN8vEyYgPizGzw/vtpr4PhMkRuZtm2Px6W4V1JCerxjJ8Yb3V4ByZ6BFZeo7b9a1Oe56Hz3OcTBfJ2k+Gjbo9cZMIuX10R7snnWvPYrVjdlZ6iSSmaS56Tyu/mD13c5oEZu2HMEo7Y8Hwz2+M8bS4ZhqQrOJHsY490hgquRWTbG6vGcTy8rPUU1SqxUO+h35QUTIfV11qPzlhBH3YjGIHrYzFtb6Jxsk7j51DU7k2KEN/AZeF7avEtSekAAAAAElFTkSuQmCC"
                  alt="google signin"
                  className="h-4 mr-3"
                />
                <p style={{ fontSize: '15px' }}>Continue with Google</p>
              </button>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="p-3 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed mt-3 w-40"
                >
                  Skip for Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default finishRegistration;
