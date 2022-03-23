import FavoritesItem from '../../components/favorites-item/favorites-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Offers, Offer} from '../../types/offers';

const isFavorites = (offer: Offer) => offer.isFavorite;

const mapOffersToCities = (offers: Offers) => offers.reduce<{[key: string]: Offers}>((acc, offer) => {
  const currentCity = offer.city.name;
  if (!acc[currentCity]) {
    acc[currentCity] = [];
  }
  acc[currentCity].push(offer);
  return acc;
}, {});

function Favorites(): JSX.Element {
  const offers:Offers = [];  //внимание, здесь времянка (заглушка)

  const filterOffers = offers.filter(isFavorites);
  const groupOffers = mapOffersToCities(filterOffers);
  return (
    <div className="page">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Favorites;
