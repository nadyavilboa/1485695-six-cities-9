import { AppRoute, AuthorizationStatus} from '../../const/routing';
import {Link} from 'react-router-dom';
import SignOut from '../sign-out/sign-out';

type NavContainerProps = {
  className: string;
  authStatus: string;
}

function NavContainer({className, authStatus}: NavContainerProps): JSX.Element {
  const isAuth = authStatus === AuthorizationStatus.Auth;
  return (
    <nav className={className}>
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={isAuth ? AppRoute.Favorites : AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">
              {isAuth ? 'Oliver.conner@gmail.com' : 'Sign in'}
            </span>
          </Link>
        </li>
        {isAuth && <SignOut className="header__nav-item" />}
      </ul>
    </nav>
  );
}

export default NavContainer;
