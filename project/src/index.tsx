import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';

const Setting={
  PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PLACES_COUNT}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
