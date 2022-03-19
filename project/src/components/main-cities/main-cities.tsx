import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import {Offers} from '../../types/offers';
import {Offer} from '../../types/offers';
import {SortTypes} from '../../const/general';

const sortOffers = (offers: Offer[], sort: string) => {
  const sortedOffers = offers.slice();
  switch (sort) {
    case SortTypes.POPULAR:
      return sortedOffers;
    case SortTypes.PRICE_ASC:
      return sortedOffers.sort((a: Offer, b: Offer) => a.price - b.price);
    case SortTypes.PRICE_DESC:
      return sortedOffers.sort((a: Offer, b: Offer) => b.price - a.price);
    case SortTypes.TOP_RATED:
      return sortedOffers.sort((a: Offer, b: Offer) => a.rating - b.rating);
    default:
      return sortedOffers;
  }
};

type MainCitiesProps = {
  cityOffers: Offers;
  onMouseOver: (cardId: number) => void;
  onMouseLeave: () => void;
  activeCity: string;
  activeSort: string;
  currentPoint: number | undefined;
}

function MainCities({
  cityOffers,
  onMouseOver,
  onMouseLeave,
  activeCity,
  activeSort,
  currentPoint,
}: MainCitiesProps): JSX.Element {

  const sortedOffers = sortOffers(cityOffers, activeSort);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeCity={activeCity} />
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
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />
          </section>
          <div className="cities__right-section">
            <Map
              className="cities__map"
              city={sortedOffers[0].city}
              offers={sortedOffers}
              currentPoint={currentPoint}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainCities;
