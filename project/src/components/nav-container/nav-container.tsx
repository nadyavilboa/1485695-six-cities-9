import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import SignOut from '../sign-out/sign-out';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {checkAuthStatus, userData} from '../../store/user-process/selectors';
import CountFavorites from '../count-favorites/count-favorites';

type NavContainerProps = {
  className: string;
}

const DEFAULT_AVATAR_URL = '../img/avatar.svg';

function NavContainer({className}: NavContainerProps): JSX.Element {
  const authStatus = useAppSelector(checkAuthStatus);
  const userInfo = useAppSelector(userData);

  const isAuth = authStatus === AuthorizationStatus.Auth;

  const avatarUrl = isAuth && userInfo?.avatarUrl ? userInfo.avatarUrl : DEFAULT_AVATAR_URL;

  return (
    <nav className={className}>
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={isAuth ? AppRoute.Favorites : AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
            {isAuth && <CountFavorites/>}
            <div
              className="header__avatar-wrapper user__avatar-wrapper"
              style={{backgroundImage: `url(${avatarUrl})`}}
            />
            <span className="header__user-name user__name">
              {isAuth ? userInfo?.email : 'Sign in'}
            </span>
          </Link>
        </li>
        {isAuth && <SignOut className="header__nav-item" />}
      </ul>
    </nav>
  );
}

export default NavContainer;
