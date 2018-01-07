import React, { Component } from 'react'

import MapView from '../MapView'
import ToolBarView from '../ToolbarView'

const apiKey = process.env.REACT_APP_GMAPS_API_KEY
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`
const restCountriesURL = 'https://restcountries.eu/rest/v2/name'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countryName: 'Singapore',
      lat: 1.3521,
      lng: 103.8198
    }
    this.handleChangeCountry = this.handleChangeCountry.bind(this)
  }

  async handleChangeCountry(event, { value: countryName }) {
    if (!countryName) return
    const res = await fetch(`${restCountriesURL}/${countryName}?fields=latlng`)
    const [json] = await res.json()
    const { latlng: [lat, lng] } = json
    this.setState({
      countryName,
      lat,
      lng
    })
  }

  render() {
    const { state } = this
    return (
      <div style={defaultStyles}>
        <MapView
          googleMapURL={googleMapURL}
          loadingElement={<div style={defaultStyles} />}
          containerElement={
            <div style={{ ...defaultStyles, height: '100%' }} />
          }
          mapElement={<div style={defaultStyles} />}
          lat={state.lat}
          lng={state.lng}
          countryName={state.countryName}
        />
        <ToolBarView handleChangeCountry={this.handleChangeCountry} />
      </div>
    )
  }
}

export default App

const defaultStyles = {
  display: 'flex',
  flex: '1'
}
