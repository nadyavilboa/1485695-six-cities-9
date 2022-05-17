import {NameSpace} from '../../const';
import {State} from '../../types/state';

const cityState = (state: State) => state[NameSpace.App];

export const selectCity = (state: State) => cityState(state).city;
