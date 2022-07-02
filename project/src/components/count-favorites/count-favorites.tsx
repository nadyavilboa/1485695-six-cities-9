import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoritesHotels} from '../../store/favorites-process/favorites-process';
import {selectFavoritesOffers} from '../../store/favorites-process/selectors';

import styles from './count-favorites.module.css';

function CountFavorites(): JSX.Element | null {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesHotels());
  }, [dispatch]);

  const favoritesOffers = useAppSelector(selectFavoritesOffers);
  const countFavorites = favoritesOffers.length;

  return (
    <div className={styles.headerСountFavorites}>
      <span>
        {countFavorites}
      </span>
      <span>
        <img src="./img/heart.svg" width="30" height="30" alt=""/>
      </span>
    </div>
  );
}

export default CountFavorites;


