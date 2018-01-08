import { all } from 'redux-saga/effects'

import api from './utils/networkCalls'

export function makeRootSaga(api = api) {
  return function* rootSaga() {
    yield all([])
  }
}

export default rootSaga
