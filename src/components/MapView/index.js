import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

import wrapper from './container'
import CountryDetails from '../CountryDetails'

export class MapView extends React.Component {
  constructor() {
    super()
    this.setRef = this.setRef.bind(this)
  }

  setRef(node) {
    this.setState({ node })
  }

  render() {
    const {
      props: { countryName, detailsVisible, handleToggleDetails, lat, lng }
    } = this
    return (
      <GoogleMap
        center={{ lat, lng }}
        defaultZoom={8}
        defaultCenter={{ lat, lng }}
        ref={this.setRef}
      >
        <Marker position={{ lat, lng }} onClick={handleToggleDetails}>
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

export default wrapper(withScriptjs(withGoogleMap(MapView)))
