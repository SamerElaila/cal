import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { createStateSelector } from '../utils/redux'
import { routeEventSelector } from '../selectors/events'
import EditEvent from '../components/edit_event/EditEvent'

const mapStateToProps = createStateSelector({
  event: routeEventSelector
})

export default compose(connect(mapStateToProps), withRouter)(EditEvent)
