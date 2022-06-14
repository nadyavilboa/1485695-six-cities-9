import {APIRoute, FetchStatus} from '../../const';
import {Offer, Offers} from '../../types/offers';
import {Favorite} from '../../types/favorite';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from '../../types/state';
import {State} from '../../types/state';
import {AxiosInstance} from 'axios';
import {handleError} from '../../services/error-handle';

interface InitialState {
  favoritesOffers: Offers,
  offersFetchStatus: FetchStatus,
  changeOffer: Offer | null,
  changeOfferStatus: FetchStatus,
}

const initialState: InitialState = {
  favoritesOffers: [],
  offersFetchStatus: FetchStatus.Idle,
  changeOffer: null,
  changeOfferStatus: FetchStatus.Idle,
};

export const fetchFavoritesHotels = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const postFavoriteStatus = createAsyncThunk<Offer, Favorite, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/postFavoriteStatus',
  async ({offerId, status}, {extra: api}) => {
    try {
      const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`, {offerId, status});
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

const favoritesProcess = createSlice({
  name: 'offers',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesHotels.pending, (state) => {
        state.offersFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoritesHotels.fulfilled, (state, action) => {
        state.offersFetchStatus = FetchStatus.Succeeded;
        state.favoritesOffers = action.payload;
      })
      .addCase(fetchFavoritesHotels.rejected, (state) => {
        state.offersFetchStatus = FetchStatus.Failed;
      })
      .addCase(postFavoriteStatus.pending, (state) => {
        state.changeOfferStatus = FetchStatus.Loading;
      })
      .addCase(postFavoriteStatus.fulfilled, (state, action) => {
        state.changeOfferStatus = FetchStatus.Succeeded;
        state.changeOffer = action.payload;
      })
      .addCase(postFavoriteStatus.rejected, (state) => {
        state.changeOfferStatus = FetchStatus.Failed;
      });
  },
});

const {reducer} = favoritesProcess;

export default reducer;
