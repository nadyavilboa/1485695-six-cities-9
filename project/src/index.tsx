import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store/index';
import {fetchHotelsAction, checkAuthAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRoute from './components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

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
