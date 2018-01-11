import * as actions from './'
import * as types from './types'

const mockData = {
  country: 'Germany',
  lat: 1.56,
  lng: 34.09,
  error: 'Error getting coordinates'
}

describe('coordinate action creators', () => {
  it('creates action to request coordinates', () => {
    const expectedResult = {
      type: types.REQUEST_COUNTRY_COORDS,
      payload: { countryName: mockData.country }
    }
    const result = actions.requestCoordinates(mockData.country)
    expect(result).toEqual(expectedResult)
  })

  it('creates action to receive coordinates', () => {
    const expectedResult = {
      type: types.COUNTRY_COORDS_SUCCESS,
      payload: { lat: mockData.lat, lng: mockData.lng }
    }
    const result = actions.coordinatesSuccess(mockData.lat, mockData.lng)
    expect(result).toEqual(expectedResult)
  })

  it('creates action for failed coordinates', () => {
    const expectedResult = {
      type: types.COUNTRY_COORDS_FAILED,
      payload: { error: mockData.error }
    }
    const result = actions.coordinatesFailed(mockData.error)
    expect(result).toEqual(expectedResult)
  })
})
