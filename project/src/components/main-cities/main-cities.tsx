import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {Offers} from '../../types/offers';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';

type MainCitiesProps = {
  cityOffers: Offers;
}

function MainCities({
  cityOffers,
}: MainCitiesProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | undefined>(undefined);
  const {activeCity, activeSort, sortedOffers} = useAppSelector((state) => state);

  const handleOnMouseOver = (cardId: number | undefined) => {
    setActiveOffer(cardId);
  };

  return (
    <main className="page__main page__main--index">
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
            <Sort activeSort={activeSort} />
            <PlacesList
              className="cities__places-list"
              offers={sortedOffers}
              isMain
              onMouseOver={handleOnMouseOver}
            />
          </section>
          <div className="cities__right-section">
            <Map
              className="cities__map"
              city={sortedOffers[0].city}
              offers={sortedOffers}
              currentPoint={activeOffer}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainCities;
