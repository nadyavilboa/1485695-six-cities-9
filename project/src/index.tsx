import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store/index';
import {fetchCheckAuth} from './store/user-process/user-process';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRoute from './components/history-route/history-route';
import browserHistory from './browser-history';
import {fetchHotels} from './store/offers-process/offers-process';
import { fetchFavoritesHotels } from './store/favorites-process/favorites-process';

store.dispatch(fetchHotels());
store.dispatch(fetchCheckAuth());
store.dispatch(fetchFavoritesHotels());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRoute>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
