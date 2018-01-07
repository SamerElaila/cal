import { connect } from 'react-redux'

import { createStateSelector } from '../utils/redux'
import { ticketsArraySelector } from '../selectors/tickets'
import Tickets from '../components/tickets/Tickets'
import { fetchTickets } from '../actions/tickets'

const mapStateToProps = createStateSelector({
  ticketsRequest: ticketsArraySelector
})

export default connect(mapStateToProps, { fetchTickets })(Tickets)
