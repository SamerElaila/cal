import { connect } from 'react-redux'

import { createStateSelector } from '../utils/redux'
import { eventsSelector } from '../selectors/events'
import Events from '../components/events/Events'
import { fetchEvents } from '../actions/events'

const mapStateToProps = createStateSelector({
  events: eventsSelector
})

export default connect(mapStateToProps, { fetchEvents })(Events)
