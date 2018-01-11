import * as types from '../../actions/statistics/types'

export const initialState = {
  fetching: false,
  userCount: 0,
  topFollowed: [],
  error: ''
}

export default (state = initialState, action) => {
  let { payload } = action || { payload: {} }
  payload = payload || {}
  switch (action.type) {
    case types.REQUEST_COUNTRY_STATS:
      return { ...state, fetching: true, error: '' }
    case types.COUNTRY_STATS_SUCCESS:
      return { ...state, fetching: false }
    case types.COUNTRY_STATS_FAILED:
      return { ...state, fetching: false, error: payload.error }
    case types.SET_COUNTRY_USER_COUNT:
      return { ...state, userCount: payload.userCount }
    case types.SET_COUNTRY_TOP_FOLLOWED_LIST:
      return { ...state, topFollowed: payload.topFollowed }
    default:
      return state
  }
}

export const statisticsSelector = state => state.statistics
