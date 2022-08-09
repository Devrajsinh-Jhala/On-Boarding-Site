import axios from 'axios';

axios.defaults.withCredentials = true;

export const login = (body) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, body);

export const signUp = (body) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, body);

export const usernameAvailable = (username) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/username-available`, {
    username,
  });
export const emailAvail = (email) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/email-available`, {
    email,
  });

export const verifyOtp = (123456, 'example.@gmail.com');
// (otp, email) =>
//   axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp`, {
//     {
//     otp: `${123456}`,
//     email,
//   });
export const requestOtp = (email, reason) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/request-otp`, {
    email,
    reason,
  });
export const resetPassword = (email, otp, password) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp`, {
    email,
    otp,
    password,
  });
export const verifyToken = () =>
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate`);
