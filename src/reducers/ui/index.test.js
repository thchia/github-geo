import * as actions from '../../actions/ui'
import reducer, { initialState } from './'

describe('ui reducer', () => {
  it('returns state by default', () => {
    const expectedResult = initialState
    const result = reducer(undefined, { type: undefined })
    expect(result).toEqual(expectedResult)
  })

  it('handles TOGGLE_INFO_BOX', () => {
    const expectedResult = {
      ...initialState,
      infoBoxVisible: true
    }
    const result = reducer(initialState, actions.toggleInfoBox())
    expect(result).toEqual(expectedResult)
  })
})
