import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/routing';

type NavNoauthProps = {
  className: string;
}

function NavNoauth({className}: NavNoauthProps): JSX.Element {
  return (
    <nav className={className}>
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavNoauth;
