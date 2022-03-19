import Header from '../../components/header/header';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../../components/main-empty/main-empty';
import MainCities from '../../components/main-cities/main-cities';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | undefined>(undefined);
  const {city, offers, sort} = useAppSelector((state) => state);

  const handleOnMouseOver = (cardId: number) => {
    setActiveOffer(cardId);
  };

  const handleOnMouseLeave = () => {
    setActiveOffer(undefined);
  };

  const cityOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      {cityOffers.length === 0 ? <MainEmpty activeCity={city} /> :
        <MainCities
          cityOffers={cityOffers}
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
          activeCity={city}
          activeSort={sort}
          currentPoint={activeOffer}
        />}
    </div>
  );
}

export default Main;
