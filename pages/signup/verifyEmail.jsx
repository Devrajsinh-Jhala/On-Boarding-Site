import React, { useEffect, useState } from 'react';
import Link from 'next/dist/client/link';
import classNames from '../../utils/constants/classNames';
import Input from '../../modals/signup/Input';
import InputMessage from '../../components/common/InputMessage';
import InputError from '../../components/common/InputError';

const Interests = () => {
  const [otp, setOtp] = useState({ isEnabled: false, otpData: '' });
  const { isEnabled, otpData } = otp;
  const [steps, setSteps] = useState(8);
  const [data, setData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    otpError: '',

    otpLoad: '',
  });
  const { email } = data;

  const { otpError, otpLoad } = errors;
  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));
  const setValidation = (val) => handleSetErrors('validated', val);
  const resetErrors = () =>
    setErrors((f) => ({
      ...f,

      otpError: '',
    }));

  useEffect(() => {
    if (otpData.length >= 6) {
      handleSetErrors('otpLoad', 'Validating OTP');
      setOtp((f) => ({ ...f, isEnabled: false }));
      import('../../utils/apis/auth').then(({ verifyOtp }) => {
        verifyOtp(otpData, email)
          .then((res) => {
            handleSetErrors('otpLoad', 'OTP Validated');
            window.location.replace(
              `${process.env.NEXT_PUBLIC_DASHBOARD_URL}?token=${res.headers.token}`
            );
          })
          .catch(() => {
            handleSetErrors('otpLoad', '');
            setOtp((f) => ({ ...f, isEnabled: true }));
            handleSetErrors('otpError', 'Invalid OTP !');
          });
      });
      setOtp((f) => ({ ...f, isEnabled: true }));
    } else {
      handleSetErrors('otpLoad', '');
    }
  }, [otpData]);

  const handleOTP = (e) => {
    if (e.target.value.length <= 6) {
      setOtp((f) => ({ ...f, otpData: e.target.value }));
    }
    resetErrors();
  };

  const reSendOTP = () => {
    setOtp((f) => ({ ...f, isEnabled: false }));
    import('../../utils/apis/auth').then(({ requestOtp }) =>
      requestOtp(email, 'confirmEmail ')
        .then(() => {
          document.getElementById('otp').focus();
          setOtp((f) => ({ ...f, isEnabled: true }));
        })
        .catch(() => {
          setOtp({ isEnabled: false, otpData: '' });
          setSteps(7);
        })
    );
  };

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
        <div className="">
          <div className="w-full max-w-xl pt-9" style={{ color: '#141820' }}>
            <div
              className={classNames('mt-12 flex items-center justify-center')}
            >
              <div className="flex mx-auto">
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-gray-200'
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-fit my-auto pt-12">
          <div className="max-w-xl">
            <div
              className={classNames(
                'flex flex-col items-center justify-center'
              )}
            >
              <h5 className="text-xl font-bold text-center">
                We Need to Verify your Email
              </h5>
              <p className="mt-4 text-base text-center">
                We sent an OTP to the Email address you provided when you
                created your account. Verify your email to continue
              </p>
              <div className="w-full">
                <Input type="text" label="Email" value={email} disabled />

                <Input
                  handleChange={handleOTP}
                  label="OTP"
                  name="otpData"
                  id="otp"
                  placeholder="Enter OTP"
                  type="number"
                  value={otpData}
                  // disabled={!isEnabled}
                />
                {otpLoad && (
                  <InputMessage
                    message={otpLoad}
                    loading={otpLoad === 'Validating OTP'}
                  />
                )}
                {otpError && <InputError error={otpError} />}
              </div>
              <hr
                className="w-full my-4"
                style={{ backgroundColor: '#dfe3eb' }}
              />
              <p className="mt-4 text-base text-center ">
                Click on the link in the email to verify your account. You may
                need to check your <strong>spam</strong> folder.
              </p>
              <Link href="/signup/location">
                <button
                  // onClick={() => reSendOTP()}
                  type="button"
                  className="bg-signup-blue disabled:cursor-default disabled:bg-opacity-50 text-sm mx-auto text-white px-3 py-2.5 rounded-md font-bold mt-10"
                  style={{ lineHeight: '1.375rem' }}
                >
                  Don&apos;t see it? Resend
                </button>
              </Link>
              <p className="text-base text-center mt-2">
                Not your account ?{' '}
                <Link href="/">
                  <a>
                    <span className="font-semibold cursor-pointer text-signup-blue">
                      Log Out
                    </span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
