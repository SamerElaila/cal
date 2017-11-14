import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { createStateSelector } from '../utils/redux'
import { routeEventSelector } from '../selectors/events'
import Event from '../components/event/Event'

const mapStateToProps = createStateSelector({
  event: routeEventSelector
})

export default compose(connect(mapStateToProps), withRouter)(Event)
