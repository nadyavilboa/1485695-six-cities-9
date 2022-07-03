import { AppRoute, AuthorizationStatus } from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { redirectToRoute } from '../../store/action';
import {postFavoriteStatus} from '../../store/favorites-process/favorites-process';
import { checkAuthStatus } from '../../store/user-process/selectors';

type BookmarkProps = {
  className: string;
  isFavorite: boolean;
  offerId: number;
  isRoom: boolean;
}

function Bookmark({className,isFavorite,offerId,isRoom}: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(checkAuthStatus);

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`}
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        if (authStatus === AuthorizationStatus.Auth) {
          dispatch(postFavoriteStatus({offerId, status: Number(!isFavorite)}));
        } else {
          dispatch(redirectToRoute(AppRoute.SignIn));
        }
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
