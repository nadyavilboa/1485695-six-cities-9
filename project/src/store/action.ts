import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {AppRoute} from '../const';
import { UserData } from '../types/user-data';

export const setCity = createAction('main/setCity', (city: string) => ({
  payload: city,
}));

export const loadOffers = createAction('data/loadOffers', (offers: Offers) => ({
  payload: offers,
}));

export const setSort = createAction('main/setSort', (sort: string) => ({
  payload: sort,
}));

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (authorizationStatus: string) => ({
    payload: authorizationStatus,
  }),
);

export const redirectToRoute = createAction('redirectToRoute', (value: AppRoute) => ({
  payload: value,
}));

export const saveUserData = createAction('user/saveUserData', (data: UserData) => ({
  payload: data,
}));
