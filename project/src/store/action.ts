import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction('main/setCity', (city: string) => ({
  payload: city,
}));

export const loadOffers = createAction('main/loadOffers');

export const setSort = createAction('main/setSort', (sort: string) => ({
  payload: sort,
}));
