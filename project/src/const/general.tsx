export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const MAX_RATING = 5;

export const RatingsValues = {
  'perfect' : 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1,
};

export enum TileLayerParameters {
  URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}
