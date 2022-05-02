import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import Tabs from '../../components/tabs/tabs';
import MainEmpty from '../../components/main-empty/main-empty';
import MainCities from '../../components/main-cities/main-cities';
import {Offer} from '../../types/offers';

function Main(): JSX.Element {
  const {offersData, city} = useAppSelector((state) => state);

  const cityOffers = offersData.filter((offer: Offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {cityOffers.length === 0
        ? <MainEmpty />
        : <MainCities cityOffers={cityOffers} />}
    </div>
  );
}

export default Main;
