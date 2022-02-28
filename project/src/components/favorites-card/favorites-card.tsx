import Badge from '../badge/badge';
import Bookmark from '../bookmark/bookmark';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/routing';
import { MAX_RATING } from '../../const/general';
import {Offer} from '../../types/offers';

type FavoritesCardProps = {
  className: string;
  offer: Offer;
}

function FavoritesCard({className, offer}: FavoritesCardProps): JSX.Element {
  const {isPremium, id, previewImage, title, price, rating, description, type} = offer;

  return (
    <article className={`${className} place-card`}>
      {isPremium && <Badge className="place-card__mark" />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/:${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className="place-card__bookmark-button" />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating*100|MAX_RATING}}></span>
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

export default FavoritesCard;
