import Badge from '../badge/badge';
import Bookmark from '../bookmark/bookmark';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/routing';
import {Offer} from '../../types/offers';
import {getWidthValue} from '../../utils/utils';

type PlaceCardProps = {
  className: string;
  offer: Offer;
  onMouseOver?: (cardId: number) => void;
  isSmall: boolean;
}

function PlaceCard({
  className,
  offer,
  isSmall,
  onMouseOver,
}: PlaceCardProps): JSX.Element {
  const {isPremium, id, previewImage, title, price, isFavorite, rating, description, type} = offer;

  return (
    <article className={`${className} place-card`} onMouseOver={() => onMouseOver?.(id)} >
      {isPremium && <Badge className="place-card__mark" />}
      <div className={`${isSmall ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/:${id}`}>
          <img className="place-card__image" src={previewImage} width={isSmall ? 150 : 260} height={isSmall ? 110 : 200} alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className="place-card" isFavorite={isFavorite} isRoom={false} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getWidthValue(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/:${id}`}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
