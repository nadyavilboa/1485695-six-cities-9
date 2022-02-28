import {OffersGroup} from '../../types/offers';
import FavoritesCard from '../favorites-card/favorites-card';

type FavoritesItemProps = {
  className: string;
  group: OffersGroup;
}

function FavoritesItem({className, group}: FavoritesItemProps): JSX.Element {
  const {city, offers} = group;

  return (
    <li className={className}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesCard className="favorites__card" offer={offer} key={offer.id} />)}
      </div>
    </li>
  );
}

export default FavoritesItem;
