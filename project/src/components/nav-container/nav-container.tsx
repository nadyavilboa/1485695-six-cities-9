import NavAuth from '../nav-auth/nav-auth';
import NavNoauth from '../nav-noauth/nav-noauth';
import { AuthorizationStatus} from '../../const/routing';

type NavContainerProps = {
  className: string;
  authStatus: string;
}

function NavContainer({className, authStatus}: NavContainerProps): JSX.Element {

  return (
    <nav className={className}>
      {authStatus === AuthorizationStatus.Auth
        ? <NavAuth className={''} />
        : <NavNoauth className={''} />}
    </nav>
  );
}

export default NavContainer;
