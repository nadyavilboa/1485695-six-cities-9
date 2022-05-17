import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import dataReducer from './data-process/data-process';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
