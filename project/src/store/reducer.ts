import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers} from './action';
import {CITIES} from '../const/general';
import {offers} from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    });
});
