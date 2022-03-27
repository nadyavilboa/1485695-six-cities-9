import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import SignOut from '../sign-out/sign-out';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

type NavContainerProps = {
  className: string;
}

const DEFAULT_AVATAR_URL = '../img/avatar.svg';

function NavContainer({className}: NavContainerProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const {userData} = useAppSelector((state) => state);

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const avatarUrl = isAuth && userData?.avatarUrl ? userData.avatarUrl : DEFAULT_AVATAR_URL;

  return (
    <nav className={className}>
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={isAuth ? AppRoute.Favorites : AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
            <div
              className="header__avatar-wrapper user__avatar-wrapper"
              style={{backgroundImage: `url(${avatarUrl})`}}
            />
            <span className="header__user-name user__name">
              {isAuth ? userData?.email : 'Sign in'}
            </span>
          </Link>
        </li>
        {isAuth && <SignOut className="header__nav-item" />}
      </ul>
    </nav>
  );
}

export default NavContainer;
