import {NameSpace} from '../../const';
import {State} from '../../types/state';

const userState = (state: State) => state[NameSpace.User];

export const selectAuthStatus = (state: State) => userState(state).authorizationStatus;
export const userData = (state: State) => userState(state).userData;
