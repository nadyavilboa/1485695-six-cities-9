import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import { UserData } from '../../types/user-data';

interface InitialState {
  authorizationStatus: string,
  userData: UserData | null,
}

export const userProcess = createSlice({
  name: 'user',
  initialState: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  } as InitialState,
  reducers: {
    changeAuthStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    changeData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {changeAuthStatus, changeData} = userProcess.actions;
