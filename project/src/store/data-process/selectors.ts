import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';
import {selectCity} from '../app-process/selectors';
import {createSelector} from '@reduxjs/toolkit';

const selectOffersState = (state: State) => state[NameSpace.Data];

export const selectOffers = (state: State) => selectOffersState(state).offersData;
export const selectOffersStatus = (state: State) => selectOffersState(state).offersFetchStatus;

export const selectSort = (state: State) => selectOffersState(state).activeSort;

export const selectCurrentOffers = createSelector(
  [selectCity, selectSort, selectOffers],
  (city: string, sort: string, offers: Offer[]) => offers.filter((offer: Offer) => offer.city.name === city));
