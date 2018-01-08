import * as actions from '../../actions/statistics'
import reducer, { initialState } from './'

const mockData = {
  error: 'Error getting statistics',
  userCount: 13245,
  topFollowed: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
}

describe('statistics reducer', () => {
  it('returns state by default', () => {
    const expectedResult = initialState
    const result = reducer(undefined, { type: undefined })
    expect(result).toEqual(expectedResult)
  })

  it('handles REQUEST_COUNTRY_STATS', () => {
    const expectedResult = { ...initialState, fetching: true }
    const result = reducer(initialState, actions.requestCountryStats())
    expect(result).toEqual(expectedResult)
  })

  it('handles COUNTRY_STATS_SUCCESS', () => {
    const expectedResult = initialState
    const fetchingState = { ...initialState, fetching: true }
    const result = reducer(fetchingState, actions.countryStatsSuccess())
    expect(result).toEqual(expectedResult)
  })

  it('handles COUNTRY_STATS_FAILED', () => {
    const expectedResult = { ...initialState, error: mockData.error }
    const result = reducer(
      initialState,
      actions.countryStatsFailed(mockData.error)
    )
    expect(result).toEqual(expectedResult)
  })

  it('handles SET_COUNTRY_USER_COUNT', () => {
    const expectedResult = { ...initialState, userCount: mockData.userCount }
    const result = reducer(
      initialState,
      actions.setUserCount(mockData.userCount)
    )
    expect(result).toEqual(expectedResult)
  })

  it('handles SET_COUNTRY_TOP_FOLLOWED_LIST', () => {
    const expectedResult = {
      ...initialState,
      topFollowed: mockData.topFollowed
    }
    const result = reducer(
      initialState,
      actions.setTopFollowed(mockData.topFollowed)
    )
    expect(result).toEqual(expectedResult)
  })
})
