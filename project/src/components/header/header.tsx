import Logo from '../logo/logo';
import NavContainer from '../nav-container/nav-container';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo className="header__logo-link" />
          </div>
          <NavContainer className="header__nav" />
        </div>
      </div>
    </header>
  );
}

export default Header;
