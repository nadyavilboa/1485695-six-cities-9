import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';

type PlacesListProps = {
  className: string;
  offers: Offers;
  onMouseOver: (cardId: number) => void;
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const {className, offers, onMouseOver} = props;
  return (
    <div className={`${className} places__list tabs__content`}>
      {offers.map((offer) => <PlaceCard className="cities__place-card" offer={offer} key={offer.id} onMouseOver={onMouseOver} isSmall={false} />)}
    </div>
  );
}

export default PlacesList;
