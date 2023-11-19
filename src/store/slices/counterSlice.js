import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action) => {
      console.log(action, 'co siedzi w action');
      state.count += Number(action.payload);
    },
    loadStorageValue: (state) => {
      state.count = Number(localStorage.getItem('count'));
      console.log(state.count, 'co siedzi state count na pcozatku');
    },

    saveToStorage: (state) => {
      localStorage.setItem('count', state.count);
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByValue,
  loadStorageValue,
  saveToStorage,
} = counterSlice.actions;

export default counterSlice.reducer;
