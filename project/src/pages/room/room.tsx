import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import Badge from '../../components/badge/badge';
import Bookmark from '../../components/bookmark/bookmark';
import {Offer} from '../../types/offers';
import {getWidthValue} from '../../utils/utils';
import CommentsList from '../../components/comments-list/comments-list';
import {Comments} from '../../types/comments';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import {city} from '../../mocks/city';

type RoomProps = {
  offers: Offer[];
  comments: Comments;
}

function Room({offers, comments}: RoomProps): JSX.Element {
  const params = useParams();

  const currentId = Number(params.id?.slice(1));
  const currentOfferIndex = offers.findIndex((offer: Offer) => offer.id === currentId);
  const currentOffer = offers[currentOfferIndex];

  const otherOffers = [...offers.slice(0, currentOfferIndex), ...offers.slice(currentOfferIndex + 1)];
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer?.images.map((image) => (
                <div className="property__image-wrapper" key={currentOffer?.id}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer?.isPremium && <Badge className="property__mark" />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer?.title}
                </h1>
                <Bookmark className="property" isFavorite={Boolean(currentOffer?.isFavorite)} isRoom />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getWidthValue(Number(currentOffer?.rating))}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer?.bedrooms} Bedroom{currentOffer?.bedrooms!==1&&'s'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer?.goods.map((item) => (
                    <li className="property__inside-item" key={currentOffer?.id}>
                      {item}
                    </li>),
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer?.host.name}
                  </span>
                  <span className="property__user-status">
                    {currentOffer?.host.isPro&&'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer?.description}
                  </p>
                </div>
              </div>
              <CommentsList className="property__reviews" comments={comments} />
            </div>
          </div>
          <section className="property__map map">
            <Map
              className="cities__map"
              city={city}
              offers={offers}
              currentPoint={currentOffer?.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList className="near-places__list" offers={otherOffers} isMain={false}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
