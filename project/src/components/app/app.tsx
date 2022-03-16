import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const/routing';
import {Offers} from '../../types/offers';
import {Comments} from '../../types/comments';

type AppScreenProps={
  offers: Offers;
  comments: Comments;
}

function App({offers, comments}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Room offers={offers} comments={comments}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers} />
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
