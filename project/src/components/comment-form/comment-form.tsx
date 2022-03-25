import {ChangeEvent, useState} from 'react';
import {RatingsValues} from '../../const';
import RatingItem from '../rating-item/rating-item';

type CommentFormProps={
  className: string;
}

function CommentForm(className: CommentFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className={`${className} form`} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingsValues).sort(([keyFirst, valFirst], [keySecond, valSecond]) => valSecond - valFirst )
          .map(([title, value]) => <RatingItem title={title} value={value} key={value} handleFieldChange={handleFieldChange} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
