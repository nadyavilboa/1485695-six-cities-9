type PlaceCardMarkProps = {
  className: string;
}

function PlaceCardMark({className}: PlaceCardMarkProps): JSX.Element {
  return (
    <button className={`${className} button`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default PlaceCardMark;
