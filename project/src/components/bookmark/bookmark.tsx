import {useAppDispatch} from '../../hooks';
import {postFavoriteStatus} from '../../store/favorites-process/favorites-process';

type BookmarkProps = {
  className: string;
  isFavorite: boolean;
  offerId: number;
  isRoom: boolean;
}

function Bookmark({className,isFavorite,offerId,isRoom}: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`}
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(postFavoriteStatus({offerId, status: Number(!isFavorite)}));
      }}
    >
      <svg className={`${className}__bookmark-icon`} width={isRoom ? 31 : 18} height={isRoom ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
