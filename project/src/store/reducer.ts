import {createReducer} from '@reduxjs/toolkit';
import {
  setCity,
  setSort,
  loadOffers,
  loadOfferId,
  loadOtherOffers,
  loadComments,
  requireAuthorization,
  saveUserData
} from './action';
import {CITIES, SortTypes, AuthorizationStatus} from '../const';
import {Offer, Offers} from '../types/offers';
import {UserData} from '../types/user-data';
import {Comments} from '../types/comments';

type InitialState = {
  city: string,
  offers: Offers,
  currentOffer: Offer | null,
  otherOffers: Offers,
  comments: Comments,
  sort: string,
  isDataLoaded: boolean,
  authorizationStatus: string,
  userData: UserData | null,
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  currentOffer: null,
  otherOffers: [],
  comments: [],
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
    .addCase(loadOfferId, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadOtherOffers, (state, action) => {
      state.otherOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.userData = action.payload;
    });
});
