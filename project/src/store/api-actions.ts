import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppRoute, APIRoute, AuthorizationStatus} from '../const';
import {api} from './index';
import {store} from './index';
import {Offers, Offer} from '../types/offers';
import {Comments, Comment, NewComment} from '../types/comments';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {
  loadOfferId,
  loadOtherOffers,
  loadComments,
  requireAuthorization,
  redirectToRoute,
  saveUserData}
  from './action';
import {handleError} from '../services/error-handle';
import {saveToken, dropToken} from '../services/token';

export const fetchOfferIdAction = createAsyncThunk(
  'data/loadOfferId',
  async (id: number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      store.dispatch(loadOfferId(data));
    } catch (error) {
      handleError(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/loadComments',
  async (id: number) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchNewCommentAction = createAsyncThunk(
  'data/sendNewComment',
  async ({offerId, rating, comment}: NewComment) => {
    try {
      await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, {rating, comment});
      store.dispatch(fetchCommentsAction(offerId));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchOtherOffersAction = createAsyncThunk(
  'data/loadOtherOffers',
  async (id: number) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Hotels}/${id}/nearby`);
      store.dispatch(loadOtherOffers(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(saveUserData(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleError(error);
    }
  },
);

/*export const addToFavoritesAction = createAsyncThunk(
  'main/addOfferToFavorites',
  async (userData: UserData) => {
    try {
      await api.post(
        `${APIRoute.Favorite}/${userData.id}/1`, {
          headers: {'X-Token': userData.token},
        });
      store.dispatch(fetchHotelsAction());
    } catch (error) {
      handleError(error);
    }
  },
);

export const deleteOfferFavorites = createAsyncThunk(
  'main/deleteOfferFavorites',
  async (userData: UserData) => {
    try {
      await api.post(
        `${APIRoute.Favorite}/${userData.id}/1`, {
          headers: {'X-Token': userData.token},
        });
      store.dispatch(fetchHotelsAction());
    } catch (error) {
      handleError(error);
    }
  },
);

export const loadFavoritesOffers = createAsyncThunk(
  'main/loadFavoritesOffers',
  async (userData: UserData) => {
    try {
      const {data} = await api.get<Offers>(
        APIRoute.Favorite, {
          headers: {'X-Token': userData.token},
        });
      store.dispatch(loadFavoritesOffers(data));
    } catch (error) {
      handleError(error);
    }
  },
);*/
