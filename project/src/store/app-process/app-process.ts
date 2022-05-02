import {createSlice} from '@reduxjs/toolkit';
import {CITIES} from '../../const';

export const appProcess = createSlice({
  name: 'app',
  initialState: {
    city: CITIES[0],
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {changeCity} = appProcess.actions;
