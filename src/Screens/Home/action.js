import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {todos} from '../../Services/api';

export const getTodos = createAsyncThunk(
  'getTodos',
  async (data, {rejectWithValue}) => {
    return await axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=cea114821ca63be1bd87887a0c4b28b8&page=1',
      )
      .then(response => {
        console.log('fullfilled', response.data);

        return response.data;
      })
      .catch(error => {
        if (!error.response) {
          throw error;
        }

        return rejectWithValue(error.response.data);
      });
  },
);

export const addTodos = createAsyncThunk(
  'addTodos',
  async (data, {rejectWithValue}) => {
    const request = {
      description: data.description,
      status: false,
    };
    return await axios
      .post(todos, request)
      .then(response => {
        console.log('fullfilled', response.data);

        return response.data;
      })
      .catch(error => {
        if (!error.response) {
          throw error;
        }

        return rejectWithValue(error.response.data);
      });
  },
);

export const deleteTodos = createAsyncThunk(
  'deleteTodos',
  async (data, {rejectWithValue}) => {
    return await axios
      .delete(`${todos}/${data}`)
      .then(response => {
        console.log('fullfilled', response.data);

        return response.data;
      })
      .catch(error => {
        if (!error.response) {
          throw error;
        }
        console.log(error.response);
        return rejectWithValue(error.response.data);
      });
  },
);
