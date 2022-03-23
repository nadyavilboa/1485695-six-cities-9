import {MAX_RATING} from '../const';

export const getWidthValue = (value: number) => {
  const result = Math.floor(value*100/MAX_RATING);
  return result;
};
