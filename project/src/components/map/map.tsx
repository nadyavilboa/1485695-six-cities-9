import {useEffect, useRef} from 'react';
import {Marker, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offers, City} from '../../types/offers';
import useMap from '../../hooks/use-map';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  currentPoint: number | undefined;
}

function Map({className, city, offers, currentPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });

      const markers = offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(currentPoint === offer.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
        return marker;
      });

      return () => {
        markers.forEach((marker) => {
          if (map) {
            map.removeLayer(marker);
          }
        });
      };
    }
  }, [map, offers, currentPoint, city]);

  return (
    <section className={`${className} map`} style={{height: '100%'}} ref={mapRef} />
  );
}

export default Map;
