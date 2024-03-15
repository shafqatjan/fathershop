'use client';

// rootReducer.ts
import { combineReducers } from 'redux';
import counterReducer from './Features/counter/counterSlice';
import signupReducer from './Features/signup/signupSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  signup: signupReducer, // Include the signup reducer
});

export default rootReducer;
