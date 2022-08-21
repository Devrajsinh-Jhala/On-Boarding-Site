/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import classNames from '../../utils/constants/classNames';
import Input from '../../components/common/Input';
import InputError from '../../components/common/InputError';
import {
  setCollege,
  setGraduationYear,
  setDegree,
  setMajor,
} from '../../store/slices/user';

const Graduation = () => {
  const dispatch = useDispatch();
  const [next, setNextpage] = useState(false);
  const [data, setData] = useState({
    college: '',
    graduationYear: 0,
    degree: '',
    major: '',
  });
  const [errors, setErrors] = useState({
    collegeError: '',
    graduationYearError: '',
    degreeError: '',
    majorError: '',
  });
  const { college, degree, graduationYear, major } = data;

  const {
    collegeError,
    degreeError,

    graduationYearError,
    majorError,
  } = errors;

  const resetErrors = () =>
    setErrors((f) => ({
      ...f,
      collegeError: '',
      graduationYearError: '',
      degreeError: '',
      majorError: '',
    }));

  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));
  const setValidation = (val) => handleSetErrors('validated', val);
  // //////////////////ERRORS //////////////////
  const checkGradYear = (value, test) => {
    if (value === 0) {
      if (!test) handleSetErrors('graduationYearError', 'Please select a year');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkCollege = (value, test) => {
    if (value.length === 0) {
      if (!test) handleSetErrors('collegeError', 'Enter college name');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkDegree = (value, test) => {
    if (value === '') {
      if (!test) handleSetErrors('degreeError', 'Select a degree');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkMajor = (value, test) => {
    if (value === '') {
      if (!test) handleSetErrors('majorError', 'Enter a major');
      return false;
    }
    if (!test) resetErrors();
    return true;
  };

  const handleErrors = (field, value) => {
    switch (field) {
      case 'graduationYear':
        checkGradYear(value);
        break;
      case 'college':
        checkCollege(value);
        break;
      case 'degree':
        checkDegree(value);
        break;
      case 'major':
        checkMajor(value);
        break;
      default:
        break;
    }
  };

  const checkErrorsExist = (exists) => {
    if (
      checkCollege(college, true) &&
      checkDegree(degree, true) &&
      checkGradYear(graduationYear, true) &&
      checkMajor(major, true)
    ) {
      setNextpage(true);
      // setValidation(true);
    } else {
      setNextpage(false);
      // setValidation(false);
    }
  };

  const handleChange = (e) => {
    setData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setTimeout(() => handleErrors(e.target.name, e.target.value), 100);
  };
  useEffect(() => checkErrorsExist(), [data]);

  const router = useRouter();
  function nextPage() {
    dispatch(setCollege(college));
    dispatch(setGraduationYear(graduationYear));
    dispatch(setDegree(degree));
    dispatch(setMajor(major));

    setTimeout(() => {
      router.push('/signup/personalinfo');
    }, 500);
  }

  return (
    <>
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
        <div className="w-[60%] self-center px-4 py-6 overflow-y-auto md:px-20 h-screen 2xl:h-[800px] 2xl:my-auto">
          {/*  */}
          <div className="">
            <div className="w-full max-w-xl pt-8" style={{ color: '#141820' }}>
              <div
                className={classNames(
                  'mt-10 flex items-center justify-between'
                )}
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

          {/*  */}
          <div className="w-fit my-auto">
            <div className={classNames('mt-8 w-full max-w-xl')}>
              <Input
                label="College"
                name="college"
                handleChange={handleChange}
                value={college}
                placeholder="Enter College Name"
                type="text"
              />
              {collegeError && <InputError error={collegeError} />}

              <div className="flex items-center pb-6">
                <div>
                  <label
                    className="my-2.5 font-semibold leading-relaxed block text-sm"
                    style={{
                      color: '#201e27',
                    }}
                  >
                    Graduation Year
                  </label>
                  <select
                    placeholder="Graduation Year"
                    name="graduationYear"
                    style={{
                      lineHeight: 1.15,
                      width: '201px',
                    }}
                    value={graduationYear}
                    onChange={handleChange}
                    className="rounded-md mb-2.5 border text-sm p-2.5 outline-none focus:border-2 focus:border-focus-cyan"
                  >
                    <option value={0}>Graduation Year</option>
                    <option value={2015}>2015</option>
                    <option value={2016}>2016</option>
                    <option value={2017}>2017</option>
                    <option value={2018}>2018</option>
                    <option value={2019}>2019</option>
                    <option value={2020}>2020</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                  </select>
                  {graduationYearError && (
                    <InputError error={graduationYearError} />
                  )}
                </div>
                <div
                  style={{
                    marginLeft: '12%',
                  }}
                  className="w-3/5"
                >
                  <Input
                    label="Degree"
                    type="text"
                    placeholder="B Tech"
                    name="degree"
                    value={degree}
                    handleChange={handleChange}
                  />

                  {degreeError && <InputError error={degreeError} />}
                </div>
              </div>
              <div className="relative flex flex-col gap-2 ">
                <Input
                  label="Major"
                  name="major"
                  handleChange={handleChange}
                  value={major}
                  placeholder="Enter Major Name"
                  type="text"
                />

                {majorError && <InputError error={majorError} />}
              </div>
              <div className="flex justify-center">
                <a>
                  <button
                    onClick={nextPage}
                    type="button"
                    className="p-3 bg-black text-white rounded-md text-sm font-medium disabled:bg-gray-600 disabled:cursor-not-allowed mt-3 w-40 disabled:bg-opacity-50"
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
    </>
  );
};

export default Graduation;
