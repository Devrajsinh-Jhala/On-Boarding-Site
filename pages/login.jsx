import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Error from '../components/common/InputError';
import Input from '../components/common/Input';
import ForgotPassword from '../components/common/ForgotPassword';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    validated: false,
  });
  const { email, password } = formData;
  const { passwordError, emailError, validated } = errors;
  const resetErrors = () => {
    setErrors((f) => ({
      ...f,
      emailError: '',
      passwordError: '',
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const options = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/login`,
      data: {
        email: formData.email,
        password: formData.password,
      },
    };

    axios
      .request(options)
      .then((response) => {
        // console.log(response.data.data.apiToken);
        sessionStorage.setItem('apiToken', response.data.data.apiToken);
        if (response.data.status === 206) {
          window.location.replace('http://localhost:3000/signup/location');
        }
      })
      .catch((error) => {
        setErrors((f) => ({
          ...f,

          emailError: 'Email and password did not match',
        }));
      });

    // import('../utils/apis/auth').then(({ login }) => {
    //   login(formData)
    //     .then((res) => {
    //       console.log(res);
    //       // console.log(`resr==es::${JSON.stringify(res.headers)}`);
    //       window.location.replace(
    //         `${process.env.NEXT_PUBLIC_DASHBOARD_URL}?token=${res.headers.token}`
    //       );
    //     })
    //     .catch((e) => {
    //       setErrors((f) => ({
    //         ...f,

    //         emailError: 'Email and password did not match',
    //       }));
    //     });
    // });
  };
  const checkEmail = (value, test) => {
    if (value.length === 0) {
      if (!test)
        setErrors((f) => ({
          ...f,
          emailError: 'Email is required',
        }));
      return false;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      if (!test)
        setErrors((f) => ({
          ...f,
          emailError: 'Not a valid email',
        }));
      return false;
    }
    if (!test) resetErrors();
    return true;
  };
  const checkPassword = (value, test) => {
    // if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value)) {
    //   if (!test)
    //     setErrors((f) => ({
    //       ...f,
    //       passwordError:
    //         'Password should be minimum of 6 characters and should contain atleast one number, one uppercase character and one special character',
    //     }));
    //   return false;
    // }
    if (!test) resetErrors();
    return true;
  };
  const handleErrors = (field, value) => {
    switch (field) {
      case 'email':
        checkEmail(value);
        break;
      case 'password':
        checkPassword(value);
        break;
      default:
        break;
    }
  };
  const handleChange = (e) => {
    handleErrors(e.target.name, e.target.value);
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (checkPassword(password, true) && checkEmail(email, true)) {
      setErrors((f) => ({ ...f, validated: true }));
    } else {
      setErrors((f) => ({ ...f, validated: false }));
    }
  }, [formData]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      import('../utils/apis/auth').then(({ verifyToken }) => {
        verifyToken()
          .then(() =>
            window.location.replace(process.env.NEXT_PUBLIC_DASHBOARD_URL)
          )
          .catch(() => setLoading(false));
      });
    } else {
      setLoading(false);
    }
  }, []);
  return (
    !loading && (
      <div className="h-screen relative flex flex-col justify-center ">
        <div
          className="bg-cover bg-no-repeat blur-[2px] w-full h-full absolute z-10"
          style={{
            backgroundImage: 'url("/images/landing-page.png")',
            backgroundPosition: '100%',
          }}
        />

        <div className="max-w-5xl h-11/12  container m-auto bg-white shadow-xl rounded-xl z-20 max-h-[49rem] relative flex overflow-y-hidden">
          <div
            className="flex flex-col w-80.1 md:w-full bg-[#eff2f6] max-w-[20.938rem] justify-center rounded-l-xl !bg-bottom !bg-contain !bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
            }}
          >
            <div className="px-10 pt-10">
              <h6 className="text-2xl font-semibold my-6 leading-[1.875rem]">
                {forgetPass ? 'Forgot password ?' : 'Welcome Back'}
              </h6>
              <p className="text-sm mb-4 text-[#788699] mt-[.7rem]">
                {forgetPass ? 'Enter Email to continue.' : 'Login to continue.'}
              </p>
            </div>
          </div>
          <div className="py-6 px-4 w-full md:w-max md:px-20 flex-grow overflow-y-auto">
            <div className="pt-8 text-[#141820]">
              {forgetPass ? (
                <ForgotPassword handleClose={() => setForgetPass(false)} />
              ) : (
                <>
                  <div className="w-full">
                    <button
                      type="button"
                      className="md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm mt-4 px-3 py-2.5 text-sm text-signup-blue"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606"
                        alt="google signin"
                        className="h-4 mr-3"
                      />
                      <p className="text-[15px]">Continue with Google</p>
                    </button>
                    <div
                      className="flex justify-between mb-3.8 mt-[1.1625rem]"
                      style={{ marginTop: '1.1625rem' }}
                    >
                      <hr className="w-full my-4 bg-[#dfe3eb]" />
                      <p className="mx-2.5 mb-4 text-base antialiased">or</p>
                      <hr className="w-full my-4 bg-[#dfe3eb]" />
                    </div>
                    <form onSubmit={onSubmit}>
                      <Input
                        label="Email"
                        name="email"
                        handleChange={handleChange}
                        value={email}
                        required
                        placeholder="Enter Email"
                        type="text"
                      />
                      {emailError && <Error error={emailError} />}
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
                        required
                        className="rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                      />
                      <button
                        className="opacity-70 inline-block -mb-1 cursor-pointer -ml-8"
                        type="button"
                        onClick={() => setPasswordToggle(!passwordToggle)}
                      >
                        <img
                          alt="Password toggle"
                          src={
                            passwordToggle
                              ? '/svg/password-eye-unhide.svg'
                              : '/svg/password-eye.svg'
                          }
                          width={20}
                          height={20}
                        />
                      </button>
                      {passwordError && <Error error={passwordError} />}

                      <button
                        type="submit"
                        disabled={!validated}
                        className="bg-signup-blue mt-[1.55rem] mx-auto mb-12 w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                  <div className="my-0 mx-[10%]">
                    <hr className="my-5 mx-auto bg-[#ebedf1]" />
                    <p className="mt-5 mb-4 text-center text-[15px] text-[#788699]">
                      Don’t have an account?{' '}
                      <Link href="/signup" passHref>
                        <span className="text-signup-blue font-semibold cursor-pointer">
                          Sign Up
                        </span>
                      </Link>
                    </p>
                    <p className="mt-5 mb-4 text-center text-[15px] text-[#788699]">
                      Forgot your password?{' '}
                      <button
                        onClick={() => setForgetPass(true)}
                        type="button"
                        className="text-signup-blue font-semibold"
                      >
                        Recover password
                      </button>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
