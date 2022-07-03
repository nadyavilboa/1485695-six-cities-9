import {Offers} from '../../types/offers';
import FavoritesItem from '../../components/favorites-item/favorites-item';

const mapOffersToCities = (offers: Offers) => offers.reduce<{[key: string]: Offers}>((acc, offer) => {
  const currentCity = offer.city.name;
  if (!acc[currentCity]) {
    acc[currentCity] = [];
  }
  acc[currentCity].push(offer);
  return acc;
}, {});

type FavoritesCitiesProps = {
  offers: Offers;
}

function FavoritesCities({offers}: FavoritesCitiesProps): JSX.Element {
  const groupOffers = mapOffersToCities(offers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupOffers).map(([city, offersCity]) => (
              <FavoritesItem
                className="favorites__locations-items"
                city={city}
                offers={offersCity}
                key={city}
              />),
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesCities;
