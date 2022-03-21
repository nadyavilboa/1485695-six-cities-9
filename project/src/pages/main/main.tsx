import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import Tabs from '../../components/tabs/tabs';
import MainEmpty from '../../components/main-empty/main-empty';
import MainCities from '../../components/main-cities/main-cities';

function Main(): JSX.Element {
  const {city, offers, sort} = useAppSelector((state) => state);

  const cityOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeCity={city} />
      {cityOffers.length === 0
        ? <MainEmpty />
        : <MainCities cityOffers={cityOffers} activeCity={city} activeSort={sort} />}
    </div>
  );
}

export default Main;
