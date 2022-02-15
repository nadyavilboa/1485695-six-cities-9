type LogoProps = {
  className: string;
}

function Logo({className}: LogoProps): JSX.Element {
  return (
    <a className={className}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </a>
  );
}

export default Logo;
