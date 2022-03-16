import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../../components/main-empty/main-empty';
import {Offer} from '../../types/offers';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const {city, offers} = useAppSelector((state) => state);

  const handleOnMouseOver = (cardId: number) => {
    const currentOffer = offers.find((offer) => offer.id === cardId);

    setActiveOffer(currentOffer);
  };

  const filterOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      {filterOffers.length === 0 ? <MainEmpty /> :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filterOffers.length} places to stay in {filterOffers[0].city.name}</b>
                <Sort className="places__sorting" />
                <PlacesList className="cities__places-list" offers={filterOffers} isMain onMouseOver={handleOnMouseOver} />
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities__map"
                  city={filterOffers[0].city}
                  offers={filterOffers}
                  currentPoint={activeOffer}
                />
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}

export default Main;
