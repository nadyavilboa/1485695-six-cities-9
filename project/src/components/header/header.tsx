import Logo from '../logo/logo';
import NavContainer from '../nav-container/nav-container';
import { AuthorizationStatus } from '../../const/routing';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo className="header__logo-link" />
          </div>
          <NavContainer className="header__nav" authStatus={AuthorizationStatus.Auth} />
        </div>
      </div>
    </header>
  );
}

export default Header;
