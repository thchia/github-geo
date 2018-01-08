import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from '../../actions/coordinates'
import * as types from '../../actions/coordinates/types'

export function makeGetCoordinatesSaga(api) {
  return function* getCoordinatesSaga(action = { payload: {} }) {
    try {
      const { payload: { countryName } } = action
      const response = yield call(api.getCoordinates({ countryName }))
      const coordinates = yield call(response.json)
      const { latlng: [lat, lng] } = coordinates
      yield put(actions.coordinatesSuccess(lat, lng))
    } catch (err) {
      const error = err.toString ? err.toString() : 'Error getting co-ordinates'
      yield put(actions.coordinatesFailed(error))
    }
  }
}

export default api => [
  takeLatest(types.REQUEST_COUNTRY_COORDS, makeGetCoordinatesSaga(api))
]
