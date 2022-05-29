import {NameSpace} from '../../const';
import {State} from '../../types/state';

const appState = (state: State) => state[NameSpace.App];

export const selectCity = (state: State) => appState(state).city;

export const selectSort = (state: State) => appState(state).sort;
