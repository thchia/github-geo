import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from '../../actions/statistics'
import * as types from '../../actions/statistics/types'

export function makeGetStatisticsSaga(api) {
  return function* getStatisticsSaga(action = { payload: {} }) {
    try {
      const { payload: { countryName } } = action
      const params = {
        countryName,
        query: '&sort=followers&order=asc'
      }
      const response = yield call(api.getGithubUsers, params)
      const stats = yield call(response.json)
      const { total_count, items } = stats
      const topFollowed = items.slice(0, 10)
      yield put(actions.setUserCount(total_count))
      yield put(actions.setTopFollowed(topFollowed))
      yield put(actions.countryStatsSuccess())
    } catch (err) {
      const error = err.toString ? err.toString() : 'Error getting statistics'
      yield put(actions.countryStatsFailed(error))
    }
  }
}

export default api => [
  takeLatest(types.REQUEST_COUNTRY_STATS, makeGetStatisticsSaga(api))
]
