import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { GoogleMap, Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

import { MapView } from './'
import CountryDetails from '../CountryDetails'

describe('MapView component', () => {
  let placeholderProps, wrapper
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
    placeholderProps = {
      countryName: 'Germany',
      detailsVisible: false,
      handleToggleDetails: jest.fn(),
      lat: 1.02,
      lng: 0.88
    }
    wrapper = shallow(<MapView {...placeholderProps} />)
  })

  it('renders GoogleMap component', () => {
    const googleMap = wrapper.find(GoogleMap)
    const renderedProps = googleMap.props()
    expect(googleMap.length).toBe(1)
    const expectedCenter = expect.objectContaining({
      lat: placeholderProps.lat,
      lng: placeholderProps.lng
    })
    expect(renderedProps.center).toEqual(expectedCenter)
    expect(renderedProps.defaultCenter).toEqual(expectedCenter)
  })

  it('renders Marker', () => {
    const marker = wrapper.find(Marker)
    const renderedProps = marker.props()
    const expectedPosition = expect.objectContaining({
      lat: placeholderProps.lat,
      lng: placeholderProps.lng
    })
    expect(marker.length).toBe(1)
    expect(renderedProps.position).toEqual(expectedPosition)
    expect(renderedProps.onClick).toEqual(placeholderProps.handleToggleDetails)
  })

  it('renders InfoBox if detailsVisible is true', () => {
    expect(wrapper.find(InfoBox).length).toBe(0)
    wrapper.setProps({ detailsVisible: true })
    const infobox = wrapper.find(InfoBox)
    const countryDetails = wrapper.find(CountryDetails)
    expect(infobox.length).toBe(1)
    expect(countryDetails.length).toBe(1)
    expect(countryDetails.props().countryName).toEqual(
      placeholderProps.countryName
    )
  })
})
