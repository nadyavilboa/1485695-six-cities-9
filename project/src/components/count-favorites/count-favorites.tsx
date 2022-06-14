import {useAppSelector} from '../../hooks';
import {selectFavoritesOffers} from '../../store/favorites-process/selectors';

import styles from './count-favorites.module.css';

function CountFavorites(): JSX.Element {
  const favoritesOffers = useAppSelector(selectFavoritesOffers);
  const countFavorites = favoritesOffers.length;
  return (
    <div className={styles.headerСountFavorites}>
      <span>
        {countFavorites}
      </span>
      <span>
        <img src="./img/heart.png" width="30" height="30" alt=""/>
      </span>
    </div>
  );
}

export default CountFavorites;
