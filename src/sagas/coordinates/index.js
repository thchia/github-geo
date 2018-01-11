import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from '../../actions/coordinates'
import { toggleInfoBox } from '../../actions/ui'
import * as types from '../../actions/coordinates/types'

export function makeGetCoordinatesSaga(api, logger) {
  return function* getCoordinatesSaga(action = { payload: {} }) {
    try {
      yield put(toggleInfoBox(false))
      const { payload: { countryName } } = action
      const response = yield call(api.getCoordinates, { countryName })

      // this needs to be done for proper context binding
      // https://github.com/redux-saga/redux-saga/issues/1141
      const coordinates = yield call([response, response.json])

      const [{ latlng: [lat, lng] }] = coordinates
      yield put(actions.coordinatesSuccess(lat, lng))
    } catch (err) {
      const userError = 'Error getting co-ordinates'
      const logError = err.toString ? err.toString() : userError
      yield call(logger.log, logError)
      yield put(actions.coordinatesFailed(userError))
    }
  }
}

export default (api, logger) => [
  takeLatest(types.REQUEST_COUNTRY_COORDS, makeGetCoordinatesSaga(api, logger))
]
