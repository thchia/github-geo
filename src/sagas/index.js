import { all } from 'redux-saga/effects'

import api from './utils/networkCalls'
import coordinatesSaga from './coordinates'
import statisticsSaga from './statistics'

export function makeRootSaga(api = api) {
  return function* rootSaga() {
    yield all([...coordinatesSaga(api), ...statisticsSaga(api)])
  }
}

export default rootSaga
