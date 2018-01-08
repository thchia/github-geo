import * as types from './types'

export const setCountryName = countryName => ({
  type: types.SET_COUNTRY_NAME,
  payload: { countryName }
})
