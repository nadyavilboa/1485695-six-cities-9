import CommentItem from '../../components/comment-item/comment-item';
import {Comments} from '../../types/comments';

type CommentsListProps = {
  className: string;
  comments: Comments;
}

function CommentsList({className, comments}: CommentsListProps): JSX.Element {
  return (
    <section className={`${className} reviews`}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => <CommentItem className="reviews__item" commentData={comment} key={comment.id} />)}
      </ul>
    </section>
  );
}

export default CommentsList;
