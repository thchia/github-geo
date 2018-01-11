import SagaTester from 'redux-saga-tester'
import { createStore } from 'redux'

import { coordinatesSuccess, requestCoordinates } from '../actions/coordinates'
import * as coordinateTypes from '../actions/coordinates/types'
import {
  countryStatsSuccess,
  requestCountryStats,
  setTopFollowed,
  setUserCount
} from '../actions/statistics'
import * as statisticTypes from '../actions/statistics/types'
import rootReducer from '../reducers'
import makeRootSaga from './'
import mockAPI from '../utils/mockNetworkCalls'

const initialState = createStore(rootReducer).getState()
const rootSaga = makeRootSaga(mockAPI, console)

const saga = new SagaTester({ initialState, reducers: rootReducer })
saga.start(rootSaga)

describe('redux store test', () => {
  it('calls getCoordinates with correct params and dispatches action', async () => {
    saga.dispatch(requestCoordinates('Germany'))
    await saga.waitFor(coordinateTypes.COUNTRY_COORDS_SUCCESS)
    const lastCalledAction = saga.getLatestCalledAction()
    expect(mockAPI.getCoordinates).toHaveBeenCalledWith(
      expect.objectContaining({ countryName: 'Germany' })
    )
    expect(lastCalledAction).toEqual(coordinatesSuccess(1.2, -0.5))
  })

  it('calls getStatistics with correct params and dispatches action', async () => {
    saga.dispatch(requestCountryStats('Germany'))
    await saga.waitFor(statisticTypes.COUNTRY_STATS_SUCCESS)
    const dispatchedActions = saga.getCalledActions()
    expect(mockAPI.getGithubUsers).toHaveBeenCalledWith(
      expect.objectContaining({
        countryName: 'Germany',
        query: '&sort=followers&order=asc'
      })
    )
    expect(dispatchedActions).toEqual(
      expect.arrayContaining([setUserCount(88), setTopFollowed([])])
    )
  })
})
