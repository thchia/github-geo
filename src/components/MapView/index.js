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
    this.setRef = this.setRef.bind(this)
    this.toggleDetailVisible = this.toggleDetailVisible.bind(this)
  }

  setRef(node) {
    this.setState({ node })
  }

  toggleDetailVisible() {
    this.props.handleToggleDetailsVisible()
  }

  render() {
    const { props: { countryName, detailsVisible, lat, lng } } = this
    return (
      <GoogleMap
        center={{ lat, lng }}
        defaultZoom={8}
        defaultCenter={{ lat, lng }}
        ref={this.setRef}
      >
        <Marker position={{ lat, lng }} onClick={this.toggleDetailVisible}>
          {detailsVisible ? (
            <InfoBox
              options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
              <div>
                <CountryDetails countryName={countryName} />
              </div>
            </InfoBox>
          ) : null}
        </Marker>
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapView))
