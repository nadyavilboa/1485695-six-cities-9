import {NameSpace} from '../../const';
import {State} from '../../types/state';

const selectFavoritesState = (state: State) => state[NameSpace.Favorites];

export const selectFavoritesOffers = (state: State) => selectFavoritesState(state).favoritesOffers;
export const selectFavoritesOffersStatus = (state: State) => selectFavoritesState(state).favoritesFetchStatus;
