import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import InputMessage from '../../components/common/InputMessage';
import classNames from '../../utils/constants/classNames';
import Input from '../../components/common/Input';
import InputError from '../../components/common/InputError';
import 'react-phone-input-2/lib/style.css';
import {
  setUsername,
  setEmail2,
  setMobile,
  setMobile2,
  setAboutMe,
} from '../../store/slices/user';

const PersonalInfo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [next, setNextpage] = useState(false);

  const [data, setData] = useState({
    username: '',
    alternateEmail: '',
    mobileNo: '+91 ',
    altMobileNo: '+91 ',
    about: '',
  });
  const [errors, setErrors] = useState({
    usernameError: '',
    altEmailError: '',
    usernameAvail: false,
    usernameLoad: '',
  });
  const { alternateEmail, mobileNo, altMobileNo, about, username } = data;

  const { usernameAvail, usernameError, usernameLoad } = errors;

  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));
  const setValidation = (val) => handleSetErrors('validated', val);

  const resetErrors = () =>
    setErrors((f) => ({
      ...f,
      fNameError: '',
      usernameError: '',
      emailError: '',
    }));
  // //////////////////ERRORS //////////////////
  const checkUsername = (value, test) => {
    if (value.length < 6) {
      if (!test)
        handleSetErrors(
          'usernameError',
          'Username should be minimum 6 characters'
        );
      return false;
    }
    if (!/^[a-z0-9_\.]+$/.test(value)) {
      if (!test)
        handleSetErrors(
          'usernameError',
          'Username can contain characters from a-z and 0-9 and no special characters except underscore and dot '
        );
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkAltEmail = (value, test) => {
    if (value.length > 0) {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        if (!test) handleSetErrors('altEmailError', 'Enter a valid email');
        return false;
      }
    } else if (!test) handleSetErrors('altEmailError', '');
    if (!test) resetErrors();
    return true;
  };

  // /////////////////////////////////////////////

  const handleErrors = (field, value) => {
    switch (field) {
      case 'username':
        checkUsername(value);
        break;
      case 'alternateEmail':
        checkAltEmail(value);
        break;
      default:
        break;
    }
  };

  const checkErrorsExist = (exists) => {
    if (
      checkUsername(username, true) &&
      checkAltEmail(alternateEmail, true) &&
      (exists || usernameAvail)
    ) {
      setNextpage(true);
      setValidation(true);
    } else {
      setNextpage(false);
      setValidation(false);
    }
  };

  const handleChange = (e) => {
    setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  useEffect(() => checkErrorsExist(), []);
  useEffect(() => {
    handleSetErrors('usernameAvail', false);
    handleSetErrors('validated', false);
    if (checkUsername(username, true)) {
      handleSetErrors('usernameLoad', 'Checking for username');
    } else {
      handleSetErrors('usernameLoad', '');
    }
    let timeoutId = null;
    if (username.length > 0 && checkUsername(username, true)) {
      timeoutId = setTimeout(
        () => {
          handleSetErrors('usernameLoad', 'Username available');
          handleSetErrors('usernameError', '');
          handleSetErrors('usernameAvail', true);
          checkErrorsExist(true);

          // import('../../utils/apis/auth').then(({ usernameAvailable }) => {
          //   usernameAvailable(username)
          //     .then(() => {
          //       handleSetErrors('usernameLoad', 'Username available');
          //       handleSetErrors('usernameError', '');
          //       handleSetErrors('usernameAvail', true);
          //       checkErrorsExist(true);
          //     })
          //     .catch(() => {
          //       handleSetErrors('usernameLoad', '');
          //       handleSetErrors('usernameError', 'Username is already taken');
          //       handleSetErrors('validated', false);
          //       handleSetErrors('usernameAvail', false);
          //     });
          // });
        },

        2000
      );
    }
    return () => clearTimeout(timeoutId);
  }, [username]);

  function nextPage() {
    dispatch(setUsername(username));
    dispatch(setEmail2(alternateEmail));
    dispatch(setMobile(mobileNo));
    dispatch(setMobile2(altMobileNo));
    dispatch(setAboutMe(about));

    setTimeout(() => {
      // window.location.replace('');
      router.push('/signup/interests');
    }, 500);
  }

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
      <div className="w-[60%] self-center overflow-y-scroll px-4 py-5 h-full md:px-20 2xl:h-[780px] 2xl:my-auto scrollbar-hide">
        {/*  */}
        <div className="">
          <div className="w-full max-w-xl pt-8" style={{ color: '#141820' }}>
            <div
              className={classNames('mt-10 flex items-center justify-between')}
            >
              <button type="button" onClick={() => router.back()}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
                  height={30}
                  width={30}
                  alt="back"
                  className="cursor-pointer"
                />
              </button>

              <div className="flex mx-auto">
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
                  )}
                />
                <div
                  className={classNames(
                    'h-1 w-6 rounded-md mr-1.5 cursor-pointer bg-blue-500'
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

        {/*  */}
        <div className="w-fit my-auto">
          <div className={classNames('mt-8 w-full max-w-xl')}>
            <Input
              label="User Name"
              name="username"
              handleChange={handleChange}
              value={username}
              placeholder="Enter Username"
              type="text"
            />
            {usernameLoad && (
              <InputMessage
                message={usernameLoad}
                loading={usernameLoad === 'Checking for username'}
              />
            )}
            {usernameError && <InputError error={usernameError} />}
            <Input
              label="Alternate Email"
              name="alternateEmail"
              handleChange={handleChange}
              value={alternateEmail}
              placeholder="Enter Alternate Email"
              type="text"
            />
            {/* {altEmailError && <InputError error={altEmailError} />} */}
            <div className="flex">
              <div className="flex-1">
                <label
                  className="my-2.5 w-6/12 font-semibold leading-relaxed block text-sm"
                  style={{
                    color: '#201e27',
                  }}
                >
                  Mobile Number
                </label>
                <PhoneInput
                  country="in"
                  value={mobileNo}
                  onChange={(num) => setData({ ...data, mobileNo: num })}
                  countryCodeEditable={false}
                  placeholder="99999 99999"
                  inputStyle={{ width: '100%' }}
                />
              </div>
              <div className="flex-1 ml-10">
                <label
                  className="my-2.5 w-full  font-semibold leading-relaxed block text-sm"
                  style={{ color: '#201e27' }}
                >
                  Alternate Mobile Number
                </label>
                <PhoneInput
                  country="in"
                  value={altMobileNo}
                  onChange={(num) => setData({ ...data, altMobileNo: num })}
                  countryCodeEditable={false}
                  placeholder="99999 99999"
                  inputStyle={{ width: '100%' }}
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <label className="text-sm font-semibold mb-2" htmlFor="about">
                About Me
              </label>
              <textarea
                rows={10}
                className="text-sm border rounded-md outline-none py-2 px-4 text-gray-600
                    focus:border-blue-700 transition duration-200 ease-out resize-none"
                name="about"
                value={about}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center">
              <a>
                <button
                  onClick={nextPage}
                  type="button"
                  className="p-3 mt-3 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed w-40 disabled:bg-opacity-50"
                  disabled={!next}
                >
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
