import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, FetchStatus, SortTypes} from '../../const';
import {handleError} from '../../services/error-handle';
import {Comments} from '../../types/comments';
import {Offers, Offer} from '../../types/offers';
import {AppDispatch, State} from '../../types/state';

interface InitialState {
  offersData: Offers,
  offersFetchStatus: FetchStatus,
  activeSort: string,
  sortedOffers: Offers,
  currentOffer: Offer | null,
  isLoading: boolean,
  favoritesOffers: Offers,
  otherOffers: Offers,
  commentsData: Comments,
}

export const fetchHotels = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Hotels);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

const dataProcess = createSlice({
  name: 'data',
  initialState: {
    offersData: [],
    offersFetchStatus: FetchStatus.Idle,
    activeSort: SortTypes.POPULAR,
    sortedOffers: [],
    currentOffer: null,
    isLoading: true,
    favoritesOffers: [],
    otherOffers: [],
    commentsData: [],
  } as InitialState,
  reducers: {
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
  extraReducers(builder) {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.offersFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.offersFetchStatus = FetchStatus.Succeeded;
        state.offersData = action.payload;
      })
      .addCase(fetchHotels.rejected, (state) => {
        state.offersFetchStatus = FetchStatus.Failed;
      });
  },
});

const {reducer} = dataProcess;

export default reducer;
