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
  favoritesFetchStatus: FetchStatus,
  changeOfferStatus: FetchStatus,
}

const initialState: InitialState = {
  favoritesOffers: [],
  favoritesFetchStatus: FetchStatus.Idle,
  changeOfferStatus: FetchStatus.Idle,
};

export const fetchFavoritesHotels = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/fetchFavoritesHotels',
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
        state.favoritesFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoritesHotels.fulfilled, (state, action) => {
        state.favoritesFetchStatus = FetchStatus.Succeeded;
        state.favoritesOffers = action.payload;
      })
      .addCase(fetchFavoritesHotels.rejected, (state) => {
        state.favoritesFetchStatus = FetchStatus.Failed;
      })
      .addCase(postFavoriteStatus.pending, (state) => {
        state.changeOfferStatus = FetchStatus.Loading;
      })
      .addCase(postFavoriteStatus.fulfilled, (state, action) => {
        state.changeOfferStatus = FetchStatus.Succeeded;
        if (action.payload.isFavorite) {
          state.favoritesOffers.push(action.payload);
        } else {
          state.favoritesOffers = state.favoritesOffers.filter((item) => item.id !== action.payload.id);
        }
      })
      .addCase(postFavoriteStatus.rejected, (state) => {
        state.changeOfferStatus = FetchStatus.Failed;
      });
  },
});

const {reducer} = favoritesProcess;

export default reducer;
