import * as types from './types'

export const requestCoordinates = countryName => ({
  type: types.REQUEST_COUNTRY_COORDS,
  payload: { countryName }
})

export const coordinatesSuccess = (lat, lng) => ({
  type: types.COUNTRY_COORDS_SUCCESS,
  payload: { lat, lng }
})

export const coordinatesFailed = error => ({
  type: types.COUNTRY_COORDS_FAILED,
  payload: { error }
})
