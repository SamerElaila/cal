import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { connect } from '../utils/redux'
import { routeEventRequestSelector } from '../selectors/events'
import EditEvent from '../components/edit_event/EditEvent'

const props = {
  eventRequest: routeEventRequestSelector
}

export default compose(
  connect(props),
  withRouter
)(EditEvent)
