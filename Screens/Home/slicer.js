import {createSlice} from '@reduxjs/toolkit';

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
  reducers: {
    addTodos: (state, action) => {
      const arr = [...state.todos];
      arr.push({description: action.payload, status: false});
      state.todos = arr;
    },
    deleteTodos: (state, action) => {
      const arr = [...state.todos];
      arr.splice(action.payload, 1);
      state.todos = arr;
    },
    updateTodos: (state, action) => {
      const arr = [...state.todos];
      arr[action.payload].status = !arr[action.payload].status;
      state.todos = arr;
    },
  },
});

// Action creators are generated for each case reducer function
export const {deleteTodos, updateTodos, addTodos} = todoSlice.actions;

export default todoSlice.reducer;
