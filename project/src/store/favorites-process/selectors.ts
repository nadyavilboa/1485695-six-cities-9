import { NameSpace } from '../../const';
import {State} from '../../types/state';

const selectFavoritesState = (state: State) => state[NameSpace.Offers];

export const selectFavoritesOffers = (state: State) => selectFavoritesState(state).offersData;
