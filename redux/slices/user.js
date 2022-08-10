import { createSlice } from '@reduxjs/toolkit';

export const newUser = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    completion: 0,
    profile: {
      name: '',
      email: '',
      password: '',
      location: '',
      college: '',
      graduationYear: '',
      degree: '',
      major: '',
      username: '',
      email2: '',
      mobile: '',
      mobile2: '',
      aboutMe: '',
    },
    preferences: {
      roles: [],
      experiences: [],
      skills: [],
    },
  },
  reducers: {
    fetchUser: (state, action) => {
      const { payload } = action;

      state._id = payload._id;

      state.profile = {
        name: payload.name,
        username: payload.username,
        college: payload.college,
        graduationYear: payload.graduationYear,
        degree: payload.degree,
        stream: payload.major,
        location: payload.location,
        email: payload.email,
        email2: payload.alternateEmail,
        mobile: payload.mobileNo,
        mobile2: payload.altMobileNo,
        aboutMe: payload.about,
      };

      state.preferences = {
        roles: [...payload.intrestedRoles],
        experiences: [...payload.experience],
        skills: [...payload.skills],
      };
    },
  },
});

export const { fetchUser } = newUser.actions;

export default newUser.reducer;
