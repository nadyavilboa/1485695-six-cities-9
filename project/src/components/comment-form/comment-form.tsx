import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {RatingsValues} from '../../const';
import RatingItem from '../rating-item/rating-item';
import {fetchComments, postNewComment} from './../../store/comments-process/comments-process';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

type CommentFormProps = {
  className: string;
  currentOfferId: number;
}

function CommentForm({className, currentOfferId}: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [newComment, setNewComment] = useState({
    offerId: currentOfferId,
    rating: 0,
    comment: '',
  });

  const commentValidate = (comment: string) => {
    if (comment.length > MIN_COMMENT_LENGTH && comment.length < MAX_COMMENT_LENGTH) {
      return true;
    } else {
      return false;
    }
  };

  const isDisabled = newComment.rating === 0 || !commentValidate(newComment.comment);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewComment({...newComment, rating: Number(evt.target.value)});
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({...newComment, comment: evt.target.value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postNewComment(newComment));
    setNewComment({...newComment, rating: 0, comment: ''});
    dispatch(fetchComments(currentOfferId));
  };

  return (
    <form
      className={`${className} form`}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingsValues).sort(([keyFirst, valFirst], [keySecond, valSecond]) => valSecond - valFirst )
          .map(([title, value]) => <RatingItem title={title} value={value} key={value} onChange={handleRatingChange} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={newComment.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with
          <b className="reviews__text-amount"> at least 50 characters</b>, but <b className="reviews__text-amount">at 300</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
