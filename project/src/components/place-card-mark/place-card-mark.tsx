type PlaceCardMarkProps = {
  className: string;
}

function PlaceCardMark({className}: PlaceCardMarkProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PlaceCardMark;
