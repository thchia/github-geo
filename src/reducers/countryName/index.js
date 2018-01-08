import config from '../../config'
import * as types from '../../actions/countryName/types'

export const initialState = config.initialCountryName

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNTRY_NAME:
      return action.payload.countryName
    default:
      return state
  }
}
