import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../Screens/Home/slicer';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
