import FavoritesItem from '../../components/favorites-item/favorites-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Offers, Offer, OffersGroup} from '../../types/offers';
import {useState} from 'react';

type FavoritesProps = {
  offers: Offers;
}

const isFavorites = (offer: Offer) => offer.isFavorite;

const mapOffersToCities = (offers: Offers) => offers.reduce<{[key: string]: Offers}>((acc, offer) => {
  const currentCity = offer.city.name;
  if (!acc[currentCity]) {
    acc[currentCity] = [];
  }
  acc[currentCity].push(offer);
  return acc;
}, {});

function Favorites({offers}: FavoritesProps): JSX.Element {
  const setActiveOffer = useState(0)[1];

  const onMouseOver = (cardId: number) => {
    const currentOffer = offers.find((offer: Offer) =>
      offer.id === cardId,
    );

    currentOffer&&setActiveOffer(currentOffer.id);
  };

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
              {Object.entries(groupOffers).map((group: OffersGroup) => <FavoritesItem className="favorites__locations-items" group={group} key={offers.length} onMouseOver={onMouseOver} />)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
