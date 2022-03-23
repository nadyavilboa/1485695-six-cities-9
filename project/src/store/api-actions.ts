import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const';
import {api} from './index';
import {store} from './index';
import {Offers} from '../types/offers';
import {loadOffers} from './action';
import {errorHandle} from '../services/error-handle';

export const fetchHotelsAction = createAsyncThunk(
  'data/loadOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Hotels);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
