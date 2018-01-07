import React, { Component } from 'react'

import MapView from '../MapView'

class App extends Component {
  render() {
    return (
      <div style={defaultStyles}>
        <MapView
          googleMapURL={googleMapURL}
          loadingElement={<div style={defaultStyles} />}
          containerElement={
            <div style={{ ...defaultStyles, height: '100%' }} />
          }
          mapElement={<div style={defaultStyles} />}
        />
      </div>
    )
  }
}

export default App

const defaultStyles = {
  display: 'flex',
  flex: '1'
}

const apiKey = process.env.REACT_APP_GMAPS_API_KEY
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`
