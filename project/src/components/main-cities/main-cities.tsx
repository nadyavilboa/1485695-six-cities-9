import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {Offers} from '../../types/offers';
import {Offer} from '../../types/offers';
import {SortTypes} from '../../const/general';
import {useState} from 'react';

const sortOffers = (offers: Offer[], sort: string) => {
  switch (sort) {
    case SortTypes.PRICE_ASC:
      return offers.sort((a: Offer, b: Offer) => a.price - b.price);
    case SortTypes.PRICE_DESC:
      return offers.sort((a: Offer, b: Offer) => b.price - a.price);
    case SortTypes.TOP_RATED:
      return offers.sort((a: Offer, b: Offer) => a.rating - b.rating);
    default:
      return offers;
  }
};

type MainCitiesProps = {
  cityOffers: Offers;
  activeCity: string;
  activeSort: string;
}

function MainCities({
  cityOffers,
  activeCity,
  activeSort,
}: MainCitiesProps): JSX.Element {
  const sortedOffers = sortOffers(cityOffers, activeSort);
  const [activeOffer, setActiveOffer] = useState<number | undefined>(undefined);

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
