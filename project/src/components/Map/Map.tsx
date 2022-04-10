import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {IMapProps} from '../../types/map';
import {Icon, Marker} from 'leaflet';
import {PinImage} from '../../types/const';

const defaultCustomIcon = new Icon({
  iconUrl:PinImage.default,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, points}: IMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points]);


  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
}

export default Map;
