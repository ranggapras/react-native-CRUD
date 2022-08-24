import {configureStore, combineReducers} from '@reduxjs/toolkit';
import todoSlice from '../Screens/Home/slicer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  todos: todoSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({reducer: persistedReducer});

const persistor = persistStore(store);

export {store, persistor};
