import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
