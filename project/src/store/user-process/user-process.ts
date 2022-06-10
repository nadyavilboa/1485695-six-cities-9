import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AuthorizationStatus} from '../../const';
import {handleError} from '../../services/error-handle';
import {AuthData} from '../../types/auth-data';
import {AppDispatch, State} from '../../types/state';
import {UserData} from '../../types/user-data';
import {saveToken, dropToken} from '../../services/token';

interface InitialState {
  authorizationStatus: string,
  userData: UserData | null,
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const fetchCheckAuth = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCheckAuth',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      return data;
    } catch(error) {
      handleError(error);
      throw error;
    }
  },
);

export const fetchLogin = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLogin',
  async ({login: email, password}, {extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.delete(APIRoute.Logout);
      dropToken();
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const userProcess = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

const {reducer} = userProcess;

export default reducer;
