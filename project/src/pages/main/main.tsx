import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {Offers} from '../../types/offers';
import {useState} from 'react';

type MainProps = {
  placesCount: number;
  offers: Offers;
}

function Main({placesCount, offers}: MainProps): JSX.Element {
  const setActiveOffer = useState(0)[1];

  const onMouseOver = (cardId: number) => {
    const currentOffer = offers.find((offer) =>
      offer.id === cardId,
    );

    currentOffer && setActiveOffer(currentOffer.id);
  };
  return (
    <div className = "page page--gray page--main">
      <Header />
      <main className = "page__main page__main--index">
        <h1 className = "visually-hidden">Cities</h1>
        <Tabs />
        <div className = "cities">
          <div className = "cities__places-container container">
            <section className = "cities__places places">
              <h2 className = "visually-hidden">Places</h2>
              <b className = "places__found">{placesCount} places to stay in Amsterdam</b>
              <Sort className = "places__sorting" />
              <PlacesList className = "cities__places-list" offers = {offers} onMouseOver = {onMouseOver} />
            </section>
            <div className = "cities__right-section">
              <Map className = "cities__map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
