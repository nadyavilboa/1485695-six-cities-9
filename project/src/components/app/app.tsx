import {Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {fetchFavoritesHotels} from '../../store/favorites-process/favorites-process';
import {fetchHotels} from '../../store/offers-process/offers-process';
import {fetchCheckAuth} from '../../store/user-process/user-process';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
    dispatch(fetchCheckAuth());
    dispatch(fetchFavoritesHotels());
  }, [dispatch]);

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
          <PrivateRoute authorizationStatus={'AUTH'} >
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
