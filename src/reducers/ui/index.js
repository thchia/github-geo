import * as types from '../../actions/ui/types'

export const initialState = {
  infoBoxVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_INFO_BOX:
      let visible =
        action.payload.visible !== undefined
          ? action.payload.visible
          : !state.infoBoxVisible
      return { ...state, infoBoxVisible: visible }
    default:
      return state
  }
}

export const uiSelector = state => state.ui
