import * as actions from './'
import * as types from './types'

describe('ui action creators', () => {
  it('creates action to toggle info box', () => {
    const expectedResult = {
      type: types.TOGGLE_INFO_BOX,
      payload: {}
    }
    const result = actions.toggleInfoBox()
    expect(result).toEqual(expectedResult)
  })
})
