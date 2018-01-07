import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps'

const MapView = () => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 1.3521, lng: 103.8198 }}>
      <Marker position={{ lat: 1.3521, lng: 103.8198 }} />
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(MapView))
