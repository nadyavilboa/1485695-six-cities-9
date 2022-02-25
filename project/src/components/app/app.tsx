import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const/routing';
import {Offers} from '../../types/offers';

type AppScreenProps = {
  placesCount: number;
  offers: Offers;
}

function App({placesCount, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesCount={placesCount} offers={offers} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Room />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
