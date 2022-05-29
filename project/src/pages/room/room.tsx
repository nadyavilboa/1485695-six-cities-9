import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import Header from '../../components/header/header';
import Badge from '../../components/badge/badge';
import Bookmark from '../../components/bookmark/bookmark';
import {getWidthValue} from '../../utils/utils';
//import CommentsList from '../../components/comments-list/comments-list';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import Loader from '../../components/loader/loader';
import CommentForm from '../../components/comment-form/comment-form';
import {AuthorizationStatus} from '../../const';
import {currentOffer, selectOffersStatus, otherOffers} from '../../store/offers-process/selectors';
import {FetchStatus} from '../../const';
import {fetchCurrentOffer} from '../../store/offers-process/offers-process';
import {selectAuthStatus} from '../../store/user-process/selectors';

const AMOUNT_IMAGES = 6;

function Room(): JSX.Element {
  const {id} = useParams<{id:string}>();
  const dispatch = useAppDispatch();

  const currentId = Number(id);

  useEffect(() => {
    dispatch(fetchCurrentOffer(currentId));
  }, [currentId, dispatch]);

  const offer = useAppSelector(currentOffer);
  const status = useAppSelector(selectOffersStatus);

  const authStatus = useAppSelector(selectAuthStatus);

  const nearbyOffers = useAppSelector(otherOffers);

  if ([FetchStatus.Idle, FetchStatus.Loading].includes(status) || !offer) {
    return (
      <Loader />
    );
  }

  if (FetchStatus.Failed && !offer) {
    return (
      <b>Something went wrong, please try again later</b>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, AMOUNT_IMAGES).map((image) => (
                <div className="property__image-wrapper" key={offer.id}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && <Badge className="property__mark" />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <Bookmark className="property" isFavorite={Boolean(offer.isFavorite)} isRoom />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getWidthValue(Number(offer.rating))}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedroom{offer.bedrooms!==1&&'s'}
                </li>
                <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((item) => (
                    <li className="property__inside-item" key={offer.id}>
                      {item}
                    </li>),
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro&&'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              {/*comments !== null && (
                  <CommentsList className="property__reviews" comments={comments} />
                )*/}
              {authStatus === AuthorizationStatus.Auth && (
                <CommentForm className="reviews__form" currentOfferId={currentId} />
              )}
            </div>
          </div>
          <section className="property__map map">
            <Map
              className="cities__map"
              city={offer.city}
              offers={nearbyOffers !== undefined ? [offer, ...nearbyOffers] : [offer]}
              currentPoint={offer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {nearbyOffers !== undefined && (
              <PlacesList className="near-places__list" offers={nearbyOffers} isMain={false}/>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
