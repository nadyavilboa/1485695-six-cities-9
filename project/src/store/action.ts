import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {AppRoute} from '../const';
import {UserData} from '../types/user-data';
import {Comments} from '../types/comments';

export const loadOtherOffers = createAction('data/loadOtherOffers', (otherOffers: Offers) => ({
  payload: otherOffers,
}));

export const loadComments = createAction('data/loadComments', (comments: Comments) => ({
  payload: comments,
}));

export const sendNewComment = createAction('data/sendNewComment');

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

export const loadFavoritesOffers = createAction('main/loadFavoritesOffers', (data: Offers) => ({
  payload: data,
}));

export const addOfferToFavorites = createAction('main/addOfferToFavorites', (data: UserData) => ({
  payload: data,
}));

export const deleteOfferFavorites = createAction('main/deleteOfferFavorites', (data: UserData) => ({
  payload: data,
}));
