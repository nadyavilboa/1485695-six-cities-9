import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction('main/setCity', (city: string) => ({
  payload: city,
}));

export const loadOffers = createAction('main/loadOffers');