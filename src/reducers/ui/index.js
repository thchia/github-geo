import * as actions from '../../actions/ui'
import * as types from '../../actions/ui/types'

export const initialState = {
  infoBoxVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_INFO_BOX:
      return { ...state, infoBoxVisible: !state.infoBoxVisible }
    default:
      return state
  }
}
