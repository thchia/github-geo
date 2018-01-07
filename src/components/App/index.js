import React, { Component } from 'react'

import ErrorView from '../ErrorView'
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
      lng: 103.8198,
      error: '',
      fetchingCountry: false,
      detailsVisible: false
    }
    this.handleChangeCountry = this.handleChangeCountry.bind(this)
    this.toggleDetailsVisible = this.toggleDetailsVisible.bind(this)
  }

  toggleDetailsVisible() {
    this.setState({ detailsVisible: !this.state.detailsVisible })
  }

  async handleChangeCountry(event, { value: countryName }) {
    this.setState({ detailsVisible: false, error: '', fetchingCountry: true })
    if (!countryName) {
      return this.setState({
        error: 'Something went wrong, please try a different search term.'
      })
    }
    try {
      const res = await fetch(
        `${restCountriesURL}/${countryName}?fields=latlng`
      )
      const [json] = await res.json()
      const { latlng: [lat, lng] } = json
      this.setState({
        countryName,
        lat,
        lng,
        fetchingCountry: false
      })
    } catch (e) {
      this.setState({
        error: 'Something went wrong, please try a different search term.',
        fetchingCountry: false
      })
    }
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
          detailsVisible={state.detailsVisible}
          handleToggleDetailsVisible={this.toggleDetailsVisible}
        />
        <ErrorView error={state.error} />
        <ToolBarView
          fetchingCountry={state.fetchingCountry}
          handleChangeCountry={this.handleChangeCountry}
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
