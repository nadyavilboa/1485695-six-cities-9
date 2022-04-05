import {ChangeEvent} from 'react';

type RatingItemProps = {
  title: string;
  value: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingItem({title, value, onChange}: RatingItemProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}'-stars'`}
        type="radio"
        onChange={onChange}
      />
      <label
        htmlFor={`${value}'-stars'`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingItem;
