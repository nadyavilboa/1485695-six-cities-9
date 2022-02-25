import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';

type PlacesListProps = {
  className: string;
  offers: Offers;
}

function PlacesList({className, offers}: PlacesListProps): JSX.Element {
  const placeArray = new Array(offers.length);
  offers.forEach((offer, index) => placeArray[index] = <PlaceCard className="cities__place-card" offer={offer}/>);
  return (
    <div className={`${className} places__list tabs__content`}>
      {placeArray}
    </div>
  );
}

export default PlacesList;
