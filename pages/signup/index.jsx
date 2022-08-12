import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from '../../components/common/Input';
import classNames from '../../utils/constants/classNames';
import InputError from '../../components/common/InputError';
import InputMessage from '../../components/common/InputMessage';

import 'react-phone-input-2/lib/style.css';

const SignUp = () => {
  const router = useRouter();

  const [passwordToggle, setPasswordToggle] = useState(false);
  const steps = 1;

  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    fNameError: '',
    usernameError: '',
    emailError: '',
    passwordError: '',
  });
  const { email, name, password } = data;
  const { emailError, fNameError, passwordError, emailLoad } = errors;

  // //////////////////ERRORS //////////////////
  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));

  const setValidation = (val) => handleSetErrors('validated', val);

  const resetErrors = () =>
    setErrors((f) => ({
      ...f,
      fNameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
    }));

  // //////////////////Check Inputs //////////////////
  const checkName = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetErrors('fNameError', 'Name is required');

      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkEmail = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetErrors('emailError', 'Email is required');
      return false;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      if (!test) handleSetErrors('emailError', 'Not a valid email');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkPassword = (value, test) => {
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
      if (!test)
        handleSetErrors(
          'passwordError',
          'Password should be minimum of 6 characters and should contain atleast one number, one uppercase character and one special character'
        );

      return false;
    }
    if (!test) resetErrors();
    return true;
  };

  // /////////////////////////////////////////////
  const handleErrors = (field, value) => {
    switch (steps) {
      case 1:
        switch (field) {
          case 'name':
            checkName(value);
            break;
          case 'email':
            checkEmail(value);
            break;
          case 'password':
            checkPassword(value);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const checkErrorsExist = (exists) => {
    switch (steps) {
      case 1:
        if (
          checkName(name, true) &&
          checkEmail(email, true) &&
          checkPassword(password, true)
        ) {
          setValidation(true);
        } else {
          setValidation(false);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => checkErrorsExist(), [data, steps]);

  const handleChange = (e) => {
    setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };

  useEffect(() => {
    setValidation(false);
    let timeoutId = null;
    if (checkEmail(email, true)) {
      handleSetErrors('emailLoad', 'Validating Email');
    } else {
      handleSetErrors('emailLoad', '');
    }

    if (email.length > 0 && checkEmail(email, true)) {
      timeoutId = setTimeout(
        () => {
          import('../../utils/apis/auth').then(({ emailAvail }) => {
            emailAvail(email)
              .then(() => {
                handleSetErrors('emailLoad', 'Email Validated');
                checkErrorsExist();
              })
              .catch(() => {
                handleSetErrors('emailError', 'Email exists!, Please Login');
                handleSetErrors('emailLoad', '');
                handleSetErrors('validated', false);
              });
          });
        },

        2000
      );
    }
    return () => clearTimeout(timeoutId);
  }, [email]);

  function submitData() {
    // console.log(data);
    sessionStorage.setItem('email', data.email);
    setTimeout(() => {
      router.push('/signup/verifyEmail');
    }, 500);
  }

  return (
    // <Backdrop>
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
          <form className={classNames('block w-full')}>
            <button
              type="button"
              className={classNames(
                'md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm  px-3 py-2.5 text-sm text-signup-blue'
              )}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606"
                alt="google signin"
                className="h-4 mr-3"
              />
              <p style={{ fontSize: '15px' }}>Continue with Google</p>
            </button>
            <div
              className={classNames('flex justify-between mb-3.8')}
              style={{ marginTop: '1.1625rem' }}
            >
              <hr
                className="w-full my-4"
                style={{ backgroundColor: '#dfe3eb' }}
              />
              <p className="mx-2.5 mb-4 text-base antialiased">or</p>
              <hr
                className="w-full my-4"
                style={{ backgroundColor: '#dfe3eb' }}
              />
            </div>
            {/* *********NAme Email************* */}

            <div>
              <div className="relative flex flex-col h-[92px]">
                <Input
                  label="Your Full Name"
                  name="name"
                  handleChange={handleChange}
                  value={name}
                  placeholder="Enter Your Full Name"
                  type="text"
                  inputProps={{ minLength: 5, maxLength: 40 }}
                />
                {fNameError && <InputError error={fNameError} />}
              </div>

              <div className="relative flex flex-col h-[92px] mt-0.5 ">
                <Input
                  label="Your Email Address"
                  name="email"
                  handleChange={handleChange}
                  value={email}
                  placeholder="Enter Email Address"
                  type="email"
                />
                {emailLoad && (
                  <InputMessage
                    message={emailLoad}
                    loading={emailLoad === 'Validating Email'}
                  />
                )}
                {emailError && <InputError error={emailError} />}
              </div>
              <div className="relative">
                <label
                  className="my-2.5 font-semibold leading-relaxed block text-sm"
                  style={{ color: '#201e27' }}
                >
                  Password
                </label>
                <input
                  placeholder="Enter Password"
                  name="password"
                  type={passwordToggle ? 'text' : 'password'}
                  style={{ lineHeight: 1.15 }}
                  onChange={handleChange}
                  value={password}
                  className="rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                />
                <button
                  type="button"
                  className="opacity-70 inline-block -mb-1 -ml-8"
                  onClick={() => setPasswordToggle(!passwordToggle)}
                >
                  <img
                    src={
                      passwordToggle
                        ? '/svg/password-eye-unhide.svg'
                        : '/svg/password-eye.svg'
                    }
                    alt="password hide and unhide"
                    width={20}
                    height={20}
                  />
                </button>
                {passwordError && <InputError error={passwordError} />}
              </div>
            </div>
            {/* <Link href="/signup/verifyEmail"> */}
            <a>
              <button
                onClick={submitData}
                type="button"
                className={classNames(
                  'bg-signup-blue disabled:cursor-not-allowed disabled:bg-opacity-50 mt-6 w-36 text-sm mx-auto mb-12 block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold'
                )}
                style={{ lineHeight: '1.375rem' }}
              >
                Next
              </button>
            </a>
            {/* </Link> */}
          </form>

          <div style={{ margin: '0 10%' }}>
            <hr className="mx-auto my-5" style={{ background: '#ebedf1' }} />
            <p
              className="mt-5 mb-4 text-center"
              style={{ fontSize: '15px', color: '#788699' }}
            >
              By signing up, you&apos;re agreeing to our{' '}
              <span className="font-semibold cursor-pointer text-signup-blue">
                Terms of Use
              </span>
            </p>
            <p
              className="mt-5 text-center"
              style={{ fontSize: '15px', color: '#788699' }}
            >
              Already have an account?{' '}
              <Link href="/login">
                <a className="font-semibold cursor-pointer text-signup-blue">
                  Log In
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    // </Backdrop>
  );
};

export default SignUp;
