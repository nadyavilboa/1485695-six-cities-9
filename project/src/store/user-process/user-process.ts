import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {UserData} from '../../types/user-data';

interface InitialState {
  authorizationStatus: string,
  userData: UserData | null,
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAuthStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    changeData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

const {reducer} = userProcess;

export default reducer;
