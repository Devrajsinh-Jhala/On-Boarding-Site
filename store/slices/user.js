import { createSlice } from '@reduxjs/toolkit';

export const newUser = createSlice({
  name: 'user',
  initialState: {
    invite: '',
    name: '',
    email: '',
    password: '',
    location: '',
    timezones: '',
    college: '',
    graduationYear: '',
    degree: '',
    major: '',
    username: '',
    email2: '',
    mobile: '',
    mobile2: '',
    aboutMe: '',
    roles: [],
    experiences: [],
    skills: [],
  },
  reducers: {
    invite: (state, action) => {
      state.invite = action.payload;
    },
    setname: (state, action) => {
      state.name = action.payload;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
    setpassword: (state, action) => {
      state.password = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setTimezones: (state, action) => {
      state.timezones = action.payload;
    },
    setCollege: (state, action) => {
      state.college = action.payload;
    },
    setGraduationYear: (state, action) => {
      state.graduationYear = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setMajor: (state, action) => {
      state.major = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail2: (state, action) => {
      state.email2 = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setMobile2: (state, action) => {
      state.mobile2 = action.payload;
    },
    setAboutMe: (state, action) => {
      state.aboutMe = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = [...action.payload];
    },
    setExperiences: (state, action) => {
      state.experiences = [...action.payload];
    },
    setSkills: (state, action) => {
      state.skills = [...action.payload];
    },
  },
});

export const {
  invite,
  setname,
  setemail,
  setpassword,
  setLocation,
  setTimezones,
  setCollege,
  setGraduationYear,
  setDegree,
  setMajor,
  setUsername,
  setEmail2,
  setMobile,
  setMobile2,
  setAboutMe,
  setRoles,
  setExperiences,
  setSkills,
} = newUser.actions;
export default newUser.reducer;
