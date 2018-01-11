import * as actions from '../../actions/coordinates'
import reducer, { initialState } from './'

const mockData = {
  lat: 1.332,
  lng: -0.5234,
  error: 'Error getting coordinates'
}

describe('coordinates reducer', () => {
  it('returns state by default', () => {
    const expectedResult = initialState
    const result = reducer(undefined, { type: undefined })
    expect(result).toEqual(expectedResult)
  })

  it('handles REQUEST_COUNTRY_COORDS', () => {
    const expectedResult = {
      ...initialState,
      fetching: true
    }
    const result = reducer(initialState, actions.requestCoordinates())
    expect(result).toEqual(expectedResult)
  })

  it('handles COUNTRY_COORDS_SUCCESS', () => {
    const expectedResult = {
      ...initialState,
      lat: mockData.lat,
      lng: mockData.lng
    }
    const result = reducer(
      initialState,
      actions.coordinatesSuccess(mockData.lat, mockData.lng)
    )
    expect(result).toEqual(expectedResult)
  })

  it('handles COUNTRY_COORDS_FAILED', () => {
    const expectedResult = {
      ...initialState,
      error: mockData.error
    }
    const result = reducer(
      initialState,
      actions.coordinatesFailed(mockData.error)
    )
    expect(result).toEqual(expectedResult)
  })
})
