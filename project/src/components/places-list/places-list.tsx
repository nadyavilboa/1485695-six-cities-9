import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';

type PlacesListProps = {
  className: string;
  offers: Offers;
  isMain: boolean;
  handleOnMouseOver?: (cardId: number) => void;
}

function PlacesList({
  className,
  offers,
  isMain,
  handleOnMouseOver,
}: PlacesListProps): JSX.Element {
  return (
    <div className={`${className} places__list ${isMain} && 'tabs__content'`}>
      {offers.map((offer) => (
        <PlaceCard
          className="cities__place-card"
          offer={offer}
          key={offer.id}
          handleOnMouseOver={handleOnMouseOver}
          isSmall={false}
        />),
      )}
    </div>
  );
}

export default PlacesList;
