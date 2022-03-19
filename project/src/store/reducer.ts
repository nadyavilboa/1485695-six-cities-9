import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSort, loadOffers} from './action';
import {CITIES, SortTypes} from '../const/general';
import {offers} from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: offers,
  sort: SortTypes.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    });
});
