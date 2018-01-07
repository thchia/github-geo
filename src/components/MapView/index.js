import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

import CountryDetails from '../CountryDetails'

class MapView extends React.Component {
  constructor() {
    super()
    this.state = {
      detailVisible: false,
      lat: 1.3521,
      lng: 103.8198
    }
    this.toggleDetailVisible = this.toggleDetailVisible.bind(this)
  }

  toggleDetailVisible() {
    this.setState({ detailVisible: !this.state.detailVisible })
  }

  render() {
    const { state: { detailVisible, lat, lng } } = this
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat, lng }}>
        <Marker position={{ lat, lng }} onClick={this.toggleDetailVisible}>
          {detailVisible ? (
            <InfoBox
              options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
              <CountryDetails />
            </InfoBox>
          ) : null}
        </Marker>
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapView))
