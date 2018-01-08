import * as types from '../../actions/coordinates/types'

export const initialState = {
  fetching: false,
  error: '',
  lat: 0,
  lng: 0
}

export default (state = initialState, action) => {
  let { payload } = action || { payload: {} }
  payload = payload || {}
  switch (action.type) {
    case types.REQUEST_COUNTRY_COORDS:
      return { ...state, fetching: true, error: '' }
    case types.COUNTRY_COORDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        lat: payload.lat,
        lng: payload.lng
      }
    case types.COUNTRY_COORDS_FAILED:
      return { ...state, fetching: false, error: payload.error }
    default:
      return state
  }
}
