import FavoritesItem from '../../components/favorites-item/favorites-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Offers, Offer} from '../../types/offers';

type FavoritesProps = {
  offers: Offers;
}

const isFavorites = (offer: Offer) => offer.isFavorite;

const isOfferCityValue = (offer: Offer, city: string) => offer.city.name === city;

const getOffersCityValue = (offers: Offers, city: string) => {
  const groupOffersCity = new Array(0);
  offers.forEach((offer) => {
    if (isOfferCityValue(offer, city)) {
      groupOffersCity.push(offer);
    }
  });
  return groupOffersCity;
};

const getCityNames = (offers: Offers) => {
  const arrayCityNames = new Array(0);
  offers.forEach((offer: Offer) => arrayCityNames.push(offer.city.name));
  return new Set(arrayCityNames);
};

const getGroupOffers = (offers: Offers) => {
  const groupOffersCities = new Array(0);
  const cityNames = getCityNames(offers);
  cityNames.forEach((city) => groupOffersCities.push({
    city: city,
    offers: getOffersCityValue(offers, city),
  }));
  return groupOffersCities;
};

function Favorites(offers: FavoritesProps): JSX.Element {
  const filterOffers = offers.offers.filter(isFavorites);
  const groupOffers = getGroupOffers(filterOffers);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {groupOffers.map((group) => <FavoritesItem className="favorites__locations-items" group={group} key={group.city}/>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
