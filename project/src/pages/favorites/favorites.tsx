import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FavoritesCities from '../../components/favorites-cities/favorites-cities';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {useAppSelector} from '../../hooks';
import {selectFavoritesOffers, selectFavoritesOffersStatus} from '../../store/favorites-process/selectors';
import {FetchStatus} from '../../const';

function Favorites(): JSX.Element {
  const favoritesOffers = useAppSelector(selectFavoritesOffers);

  const status = useAppSelector(selectFavoritesOffersStatus);
  const isError = status === FetchStatus.Failed;

  return (
    <div className="page">
      <Header />
      {favoritesOffers.length === 0
        ? <FavoritesEmpty requestError={isError} />
        : <FavoritesCities offers={favoritesOffers} />}
      <Footer />
    </div>
  );
}

export default Favorites;
