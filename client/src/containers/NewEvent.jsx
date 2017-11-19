import { connect } from 'react-redux'

import NewEvent from '../components/new_event/NewEvent'
import * as actions from '../actions/events'

export default connect(undefined, actions)(NewEvent)
