import {MAX_RATING, SortTypes} from '../const';
import {Offers, Offer} from '../types/offers';

export const getWidthValue = (value: number) => {
  const result = Math.floor(value*100/MAX_RATING);
  return result;
};

export const sortOffers = (activeSort: string, offers: Offers) => {
  let sortedOffers = new Array(0);
  switch (activeSort) {
    case SortTypes.PRICE_ASC:
      sortedOffers = offers.sort((a: Offer, b: Offer) => a.price - b.price);
      break;
    case SortTypes.PRICE_DESC:
      sortedOffers = offers.sort((a: Offer, b: Offer) => b.price - a.price);
      break;
    case SortTypes.TOP_RATED:
      sortedOffers = offers.sort((a: Offer, b: Offer) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
  }
  return sortedOffers;
};
