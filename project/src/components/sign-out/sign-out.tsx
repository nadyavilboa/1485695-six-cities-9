import {useAppDispatch} from '../../hooks';
import {fetchLogout} from '../../store/user-process/user-process';

type NavContainerProps = {
  className: string;
}

function SignOut({className}: NavContainerProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className={className}>
      <a
        className="header__nav-link"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(fetchLogout());
        }}
      >
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default SignOut;
