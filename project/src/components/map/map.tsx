import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offers, City} from '../../types/offers';
import useMap from '../../hooks/useMap';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
}

function Map({className, city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [defaultCustomIcon, map, offers]);

  return (
    <section className={`${className} map`} style={{height: '579px'}} ref={mapRef} />
  );
}

export default Map;
