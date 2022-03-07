import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type FavoritesItemProps = {
  className: string;
  city: string;
  offers: Offer[];
}

function FavoritesItem({className, city, offers}: FavoritesItemProps): JSX.Element {
  return (
    <li className = {className}>
      <div className = "favorites__locations locations locations--current">
        <div className = "locations__item">
          <a className = "locations__item-link" href = "#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className = "favorites__places">
        {offers.map((offer: Offer) => (
          <PlaceCard
            className = "favorites__card"
            offer = {offer}
            key = {offer.id}
            isSmall
          />),
        )}
      </div>
    </li>
  );
}

export default FavoritesItem;
