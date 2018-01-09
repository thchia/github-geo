import React, { Component } from 'react'

import wrapper from './container'
import ErrorView from '../ErrorView'
import MapView from '../MapView'
import ToolBarView from '../ToolbarView'
import config from '../../config'

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${
  config.googleMapsAPIKey
}&v=3.exp&libraries=geometry,drawing,places`

class App extends Component {
  constructor() {
    super()
    this.state = {
      fetchingCountry: false,
      detailsVisible: false
    }
    this.toggleDetailsVisible = this.toggleDetailsVisible.bind(this)
  }

  toggleDetailsVisible() {
    this.setState({ detailsVisible: !this.state.detailsVisible })
  }

  render() {
    const { props, state } = this
    return (
      <div style={defaultStyles}>
        <MapView
          googleMapURL={googleMapURL}
          loadingElement={<div style={defaultStyles} />}
          containerElement={
            <div style={{ ...defaultStyles, height: '100%' }} />
          }
          mapElement={<div style={defaultStyles} />}
          lat={props.lat}
          lng={props.lng}
          countryName={props.countryName}
          detailsVisible={state.detailsVisible}
          handleToggleDetailsVisible={this.toggleDetailsVisible}
        />
        <ErrorView error={props.error} />
        <ToolBarView />
      </div>
    )
  }
}

export default wrapper(App)

const defaultStyles = {
  display: 'flex',
  flex: '1'
}
