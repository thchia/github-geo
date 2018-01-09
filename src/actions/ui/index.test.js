import * as actions from './'
import * as types from './types'

describe('ui action creators', () => {
  it('creates action to toggle info box', () => {
    const expectedResult = {
      type: types.TOGGLE_INFO_BOX,
      payload: { visible: true }
    }
    const result = actions.toggleInfoBox(true)
    expect(result).toEqual(expectedResult)
  })
})
