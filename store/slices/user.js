import { createSlice } from '@reduxjs/toolkit';

export const newUser = createSlice({
  name: 'user',
  initialState: {
    invite: '',
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
  },
});

export const { invite, setname, setemail, setpassword } = newUser.actions;
export default newUser.reducer;
