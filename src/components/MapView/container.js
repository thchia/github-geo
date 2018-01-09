import { connect } from 'react-redux'

import { toggleInfoBox } from '../../actions/ui'

const mapDispatchToProps = dispatch => ({
  handleToggleDetails: () => dispatch(toggleInfoBox())
})

export default connect(null, mapDispatchToProps)
