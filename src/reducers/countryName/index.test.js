import * as actions from '../../actions/countryName'
import reducer, { initialState } from './'

const mockData = {
  countryName: 'Germany'
}

describe('countryName reducer', () => {
  it('returns state by default', () => {
    const expectedResult = initialState
    const result = reducer(undefined, { type: undefined })
    expect(result).toEqual(expectedResult)
  })

  it('handles SET_COUNTRY_NAME', () => {
    const expectedResult = mockData.countryName
    const result = reducer(
      initialState,
      actions.setCountryName(mockData.countryName)
    )
    expect(result).toEqual(expectedResult)
  })
})
