import { connect } from 'react-redux'

import { createStateSelector } from '../utils/redux'
import { eventsRequestSelector } from '../selectors/events'
import Events from '../components/events/Events'
import { fetchEvents } from '../actions/events'

const mapStateToProps = createStateSelector({
  eventsRequest: eventsRequestSelector
})

export default connect(mapStateToProps, { fetchEvents })(Events)
