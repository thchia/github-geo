import { all } from 'redux-saga/effects'

import api from '../utils/networkCalls'
import coordinatesSaga from './coordinates'
import statisticsSaga from './statistics'

export function makeRootSaga(dependency = api) {
  return function* rootSaga() {
    yield all([...coordinatesSaga(dependency), ...statisticsSaga(dependency)])
  }
}

export default makeRootSaga
