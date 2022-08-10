import { configureStore } from '@reduxjs/toolkit';
import User from './slices/user';

export const store = configureStore({
  reducer: {
    user: User,
  },
});
