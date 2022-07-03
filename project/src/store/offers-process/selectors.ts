import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';
import {selectCity, selectSort} from '../app-process/selectors';
import {sortOffers} from '../../utils/utils';
import {createSelector} from '@reduxjs/toolkit';

const selectOffersState = (state: State) => state[NameSpace.Offers];

export const selectOffers = (state: State) => selectOffersState(state).offersData;
export const selectOffersStatus = (state: State) => selectOffersState(state).offersFetchStatus;

export const currentOffer = (state: State) => selectOffersState(state).currentOffer;
export const currentOfferFetchStatus = (state: State) => selectOffersState(state).currentOfferFetchStatus;

export const otherOffers = (state: State) => selectOffersState(state).otherOffers;

export const selectCurrentOffers = createSelector(
  [selectCity, selectSort, selectOffers],
  (city, sort, offers) => {
    const filteredOffers = offers.filter((offer: Offer) => offer.city.name === city);
    return sortOffers(sort, filteredOffers);
  });
