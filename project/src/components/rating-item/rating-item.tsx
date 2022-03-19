import {ChangeEvent} from 'react';

type RatingItemProps = {
  title: string;
  value: number;
  handleFieldChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function RatingItem({title, value, handleFieldChange}: RatingItemProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}'-stars'`}
        type="radio"
        onChange={handleFieldChange}
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
