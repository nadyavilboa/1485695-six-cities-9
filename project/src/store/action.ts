import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';

export const setCity = createAction('main/setCity', (city: string) => ({
  payload: city,
}));

export const loadOffers = createAction('data/loadOffers', (offers: Offers) => ({
  payload: offers,
}));

export const setSort = createAction('main/setSort', (sort: string) => ({
  payload: sort,
}));
