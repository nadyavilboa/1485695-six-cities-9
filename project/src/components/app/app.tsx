import {Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {
  const {isLoading} = useAppSelector((state) => state);
  const {authorizationStatus} = useAppSelector((state) => state);

  if (!isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
        element={<Room />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus} >
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFound />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
