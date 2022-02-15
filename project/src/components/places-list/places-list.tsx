import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  className: string;
}

function PlacesList({className}: PlacesListProps): JSX.Element {
  const placeArray = new Array(5).fill(<PlaceCard className="cities__place-card" />);
  return (
    <div className={`${className} places__list tabs__content`}>
      {placeArray}
    </div>
  );
}

export default PlacesList;
