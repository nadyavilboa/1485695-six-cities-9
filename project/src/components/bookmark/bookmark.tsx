type BookmarkProps = {
  className: string;
  isFavorite: boolean;
  isRoom: boolean;
}

function Bookmark({className,isFavorite,isRoom}: BookmarkProps): JSX.Element {
  return (
    <button className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`} type="button">
      <svg className={`${className}__bookmark-icon`} width={isRoom ? 31 : 18} height={isRoom ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
