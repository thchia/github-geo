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
      detailVisible: false
    }
    this.setRef = this.setRef.bind(this)
    this.toggleDetailVisible = this.toggleDetailVisible.bind(this)
  }

  setRef(node) {
    this.setState({ node })
  }

  toggleDetailVisible() {
    this.setState({ detailVisible: !this.state.detailVisible })
  }

  render() {
    const { props: { countryName, lat, lng }, state: { detailVisible } } = this
    return (
      <GoogleMap
        center={{ lat, lng }}
        defaultZoom={8}
        defaultCenter={{ lat, lng }}
        ref={this.setRef}
      >
        <Marker position={{ lat, lng }} onClick={this.toggleDetailVisible}>
          {detailVisible ? (
            <InfoBox
              options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
              <CountryDetails countryName={countryName} />
            </InfoBox>
          ) : null}
        </Marker>
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapView))
