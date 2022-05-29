import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import offersReducer from './offers-process/offers-process';
import appProcess from './app-process/app-process';
import userProcess from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersReducer,
  [NameSpace.App]: appProcess,
  [NameSpace.User]: userProcess,
});
