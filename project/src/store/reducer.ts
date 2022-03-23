import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSort, loadOffers} from './action';
import {CITIES, SortTypes} from '../const';
import {Offers} from '../types/offers';

type InitialState = {
  city: string,
  offers: Offers,
  sort: string,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  sort: SortTypes.POPULAR,
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});
