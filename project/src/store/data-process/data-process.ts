import {createSlice} from '@reduxjs/toolkit';
import {SortTypes} from '../../const';
import {Comments} from '../../types/comments';
import {Offers, Offer} from '../../types/offers';

interface InitialState {
  offersData: Offers,
  activeSort: string,
  sortedOffers: Offers,
  currentOffer: Offer | null,
  isLoading: boolean,
  favoritesOffers: Offers,
  otherOffers: Offers,
  commentsData: Comments,
}

export const dataProcess = createSlice({
  name: 'data',
  initialState: {
    offersData: [],
    activeSort: SortTypes.POPULAR,
    sortedOffers: [],
    currentOffer: null,
    isLoading: true,
    favoritesOffers: [],
    otherOffers: [],
    commentsData: [],
  } as InitialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offersData = action.payload;
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getSortedOffers: (state, action) => {
      const offers = action.payload.slice();
      if(offers === undefined) {
        return state;
      }
      switch (state.activeSort) {
        case SortTypes.PRICE_ASC:
          state.sortedOffers = offers.sort((a: Offer, b: Offer) => a.price - b.price);
          break;
        case SortTypes.PRICE_DESC:
          state.sortedOffers = offers.sort((a: Offer, b: Offer) => b.price - a.price);
          break;
        case SortTypes.TOP_RATED:
          state.sortedOffers = offers.sort((a: Offer, b: Offer) => b.rating - a.rating);
          break;
        default:
          state.sortedOffers = offers;
      }
    },
    changeCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    changeSort: (state, action) => {
      state.activeSort = action.payload;
    },
    changeFavorites: (state, action) => {
      state.favoritesOffers = action.payload;
    },
    getOtherOffers: (state, action) => {
      state.otherOffers = action.payload;
    },
    getComments: (state, action) => {
      state.commentsData = action.payload;
    },
  },
});

export const {
  loadOffers,
  changeIsLoading,
  getSortedOffers,
  changeCurrentOffer,
  changeSort,
  changeFavorites,
  getOtherOffers,
  getComments,
} = dataProcess.actions;
