export enum AppRoute {
  SignIn = '/login',
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer',
}

export enum APIRoute {
  Hotels = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const MAX_RATING = 5;

export const RatingsValues = {
  'perfect' : 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_ASC: 'Price: low to high',
  PRICE_DESC: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};
