import Badge from '../badge/badge';
import Bookmark from '../bookmark/bookmark';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/routing';
import { MULTIPLER } from '../../const/general';
import {Offer} from '../../types/offers';

type PlaceCardProps = {
  className: string;
  offer: Offer;
}

function PlaceCard({className, offer}: PlaceCardProps): JSX.Element {
  return (
    <article className={`${className} place-card`}>
      {offer.isPremium ? <Badge className="place-card__mark" /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/:id`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className="place-card__bookmark-button" />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating*MULTIPLER}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{offer.description}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
