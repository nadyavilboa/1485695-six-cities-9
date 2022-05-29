import {createSlice} from '@reduxjs/toolkit';
import {CITIES, SortTypes} from '../../const';

export const appProcess = createSlice({
  name: 'app',
  initialState: {
    city: CITIES[0],
    sort: SortTypes.POPULAR,
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

const {reducer} = appProcess;

export const {changeCity, changeSort} = appProcess.actions;

export default reducer;

