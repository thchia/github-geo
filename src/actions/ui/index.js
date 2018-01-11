import * as types from './types'

export const toggleInfoBox = visible => ({
  type: types.TOGGLE_INFO_BOX,
  payload: { visible }
})
