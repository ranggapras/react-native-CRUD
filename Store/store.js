import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../src/Screens/Home/slicer';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
