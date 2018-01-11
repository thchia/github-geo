import * as actions from './'
import * as types from './types'

const mockData = {
  countryName: 'Germany'
}

describe('countryName action creators', () => {
  it('creates action to set country name', () => {
    const expectedResult = {
      type: types.SET_COUNTRY_NAME,
      payload: { countryName: mockData.countryName }
    }
    const result = actions.setCountryName(mockData.countryName)
    expect(result).toEqual(expectedResult)
  })
})
