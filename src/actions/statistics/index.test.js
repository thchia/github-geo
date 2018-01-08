import * as actions from './'
import * as types from './types'

const mockData = {
  countryName: 'Germany',
  error: 'Error getting statistics',
  topFollowed: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  userCount: 12387
}

describe('statistics action creators', () => {
  it('creates action to request statistics', () => {
    const expectedResult = {
      type: types.REQUEST_COUNTRY_STATS,
      payload: { countryName: mockData.countryName }
    }
    const result = actions.requestCountryStats(mockData.countryName)
    expect(result).toEqual(expectedResult)
  })

  it('creates action to receive statistics', () => {
    const expectedResult = {
      type: types.COUNTRY_STATS_SUCCESS,
      payload: {}
    }
    const result = actions.countryStatsSuccess()
    expect(result).toEqual(expectedResult)
  })

  it('creates action for failed statistics', () => {
    const expectedResult = {
      type: types.COUNTRY_STATS_FAILED,
      payload: { error: mockData.error }
    }
    const result = actions.countryStatsFailed(mockData.error)
    expect(result).toEqual(expectedResult)
  })

  it('creates action to set user count', () => {
    const expectedResult = {
      type: types.SET_COUNTRY_USER_COUNT,
      payload: { userCount: mockData.userCount }
    }
    const result = actions.setUserCount(mockData.userCount)
    expect(result).toEqual(expectedResult)
  })

  it('creates action to set top followed', () => {
    const expectedResult = {
      type: types.SET_COUNTRY_TOP_FOLLOWED_LIST,
      payload: { topFollowed: mockData.topFollowed }
    }
    const result = actions.setTopFollowed(mockData.topFollowed)
    expect(result).toEqual(expectedResult)
  })
})
