import React, { useEffect, useRef, useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import mapLogo from '../assets/images/mapLogo.png';
import MapPopup from './MapPopup';

const MapContainer = ({coords, showPopup, title, flyData, setFlyData}) => {

  const mapRef = useRef(null);

  const [viewport] = useState({
    longitude: -73.9307691,
    latitude: 40.7030037,
    zoom: 14,
  })
  const resetFly = ()=>{
    setFlyData({
      ...flyData,
      condition : false,
    })
  }
  const fly = () => {
    mapRef.current?.flyTo({center: [coords[0], coords[1]], duration: 2000, zoom:17});
  };

  useEffect(() => {
    if(flyData.condition){
      fly()
      resetFly()
    }
  }, [flyData.condition])
  
  return ( 
      <section class="map" id="map">
        <Map
          ref={mapRef}
          mapboxAccessToken="pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg"
          mapLib={import('mapbox-gl')}
          initialViewState={viewport}
          mapStyle="mapbox://styles/exrlandings/cly2y79qe005z01qv7trzh6tg"
        >
          <Marker longitude="-73.9307691" latitude="40.7030037" anchor="bottom">
            <img style={{width: "80px"}} src={mapLogo} alt="" />
          </Marker>  
          {
            showPopup && 
            <MapPopup coords={coords} name={title}/>
          }
        </Map>
      </section>
  );
  
}

 
export default MapContainer;