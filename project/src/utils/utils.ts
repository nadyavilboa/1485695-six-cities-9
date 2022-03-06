import {MAX_RATING} from '../const/general';

export const getWidthValue = (value: number) => {
  const result = Math.floor(value*100/MAX_RATING);
  return result;
};
