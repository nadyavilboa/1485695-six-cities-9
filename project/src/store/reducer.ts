import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSort, loadOffers, requireAuthorization, saveUserData} from './action';
import {CITIES, SortTypes, AuthorizationStatus} from '../const';
import {Offers} from '../types/offers';
import { UserData } from '../types/user-data';

type InitialState = {
  city: string,
  offers: Offers,
  sort: string,
  isDataLoaded: boolean,
  authorizationStatus: string,
  userData: UserData | null,
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  sort: SortTypes.POPULAR,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.userData = action.payload;
    });
});
