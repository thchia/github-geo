import { all } from 'redux-saga/effects'

import loggerDependency from '../utils/logger'
import api from '../utils/networkCalls'
import coordinatesSaga from './coordinates'
import statisticsSaga from './statistics'

export function makeRootSaga(dependency = api, logger = loggerDependency) {
  return function* rootSaga() {
    yield all([
      ...coordinatesSaga(dependency, logger),
      ...statisticsSaga(dependency, logger)
    ])
  }
}

export default makeRootSaga
