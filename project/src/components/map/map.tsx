import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offers, City, Offer} from '../../types/offers';
import useMap from '../../hooks/use-map';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  currentPoint?: Offer;
}

function Map({className, city, offers, currentPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: currentPoint !== undefined && offer.city.name === currentPoint?.city.name
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, currentPoint]);

  return (
    <section className={`${className} map`} style={{height: '100%'}} ref={mapRef} />
  );
}

export default Map;
