import * as types from './types'

export const requestCountryStats = countryName => ({
  type: types.REQUEST_COUNTRY_STATS,
  payload: { countryName }
})

export const countryStatsSuccess = () => ({
  type: types.COUNTRY_STATS_SUCCESS,
  payload: {}
})

export const countryStatsFailed = error => ({
  type: types.COUNTRY_STATS_FAILED,
  payload: { error }
})

export const setUserCount = userCount => ({
  type: types.SET_COUNTRY_USER_COUNT,
  payload: { userCount }
})

export const setTopFollowed = topFollowed => ({
  type: types.SET_COUNTRY_TOP_FOLLOWED_LIST,
  payload: { topFollowed }
})
