import * as types from '../../actions/countryName/types'

export const initialState = 'Singapore'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNTRY_NAME:
      return action.payload.countryName
    default:
      return state
  }
}
