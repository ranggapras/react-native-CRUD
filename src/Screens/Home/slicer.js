import {createSlice} from '@reduxjs/toolkit';
import {getTodos, addTodos, deleteTodos} from './action';

const initialState = {
  todos: [
    {
      description: 'Makan',
      status: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [getTodos.pending]: state => {
      console.log('pending');
    },
    [getTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
    [getTodos.rejected]: state => {
      console.log('reject');
      return {
        ...state,
      };
    },
    [addTodos.pending]: state => {
      console.log('pending');
    },
    [addTodos.rejected]: state => {
      console.log('reject');
    },
    [deleteTodos.pending]: state => {
      console.log('pending');
    },
    [deleteTodos.rejected]: state => {
      console.log('reject');
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions;

export default todoSlice.reducer;
