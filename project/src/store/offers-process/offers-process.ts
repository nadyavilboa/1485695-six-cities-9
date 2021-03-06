import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, FetchStatus} from '../../const';
import {handleError} from '../../services/error-handle';
import {Offers, Offer} from '../../types/offers';
import {AppDispatch, State} from '../../types/state';

interface InitialState {
  offersData: Offers,
  offersFetchStatus: FetchStatus,
  currentOfferFetchStatus: FetchStatus,
  currentOffer: Offer | null,
  otherOffers: Offers,
}

const initialState: InitialState = {
  offersData: [],
  offersFetchStatus: FetchStatus.Idle,
  currentOfferFetchStatus: FetchStatus.Idle,
  currentOffer: null,
  otherOffers: [],
};

export const fetchHotels = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Hotels);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const fetchCurrentOffer = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchCurrentOffer',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const fetchOtherOffers = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchOtherOffer',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Hotels}/${id}/nearby`);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

const offersProcess = createSlice({
  name: 'offers',
  initialState,
  reducers: {
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
      })
      .addCase(fetchCurrentOffer.pending, (state) => {
        state.currentOfferFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.currentOfferFetchStatus = FetchStatus.Succeeded;
        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        state.currentOfferFetchStatus = FetchStatus.Failed;
      })
      .addCase(fetchOtherOffers.fulfilled, (state, action) => {
        state.otherOffers = action.payload;
      });
  },
});

const {reducer} = offersProcess;

export default reducer;
