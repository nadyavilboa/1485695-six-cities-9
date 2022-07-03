import {useAppSelector} from '../../hooks';
import {selectFavoritesOffers} from '../../store/favorites-process/selectors';

import styles from './count-favorites.module.css';

function CountFavorites(): JSX.Element | null {
  const favoritesOffers = useAppSelector(selectFavoritesOffers);
  const countFavorites = favoritesOffers.length;

  return (
    <div className={styles.headerСountFavorites}>
      <span className={styles.amountValueFavorites}>
        {countFavorites}
      </span>
      <span>
        <img src="./img/heart.svg" width="30" height="30" alt=""/>
      </span>
    </div>
  );
}

export default CountFavorites;


