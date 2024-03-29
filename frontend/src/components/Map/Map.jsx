import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Map.scss"
import "leaflet/dist/leaflet.css";
import Pin from '../Pin/Pin';

const Map = ({items}) => { 

  return (
    <div>
      <MapContainer className='map' center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      items.map((item) => {
        return (
          <Pin item={item} key={item.id}/>
        )
      })
    }
  </MapContainer>

    </div>
  )
}

export default Map