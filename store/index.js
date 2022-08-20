import { configureStore } from '@reduxjs/toolkit';
import newUser from './slices/user';

export default configureStore({
  reducer: {
    user: newUser,
  },
});
