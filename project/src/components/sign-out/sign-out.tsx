type NavContainerProps = {
  className: string;
}

function SignOut({className}: NavContainerProps): JSX.Element {
  return (
    <li className = {className}>
      <a className = "header__nav-link" href = "#">
        <span className = "header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default SignOut;
