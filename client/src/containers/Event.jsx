import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { createStateSelector } from '../utils/redux'
import { routeEventRequestSelector } from '../selectors/events'
import { userSelector } from '../selectors/user'
import Event from '../components/event/Event'

const mapStateToProps = createStateSelector({
  eventRequest: routeEventRequestSelector,
  user: userSelector
})

export default compose(connect(mapStateToProps), withRouter)(Event)
