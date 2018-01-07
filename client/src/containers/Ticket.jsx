import { compose } from 'redux'
import { connect } from '../utils/redux'
import { withRouter } from 'react-router-dom'

import { ticketSelector as ticketRequest } from '../selectors/tickets'
import { routeParamsSelector as routeParams } from '../selectors/router'
import { fetchTicketQr } from '../actions/tickets'
import Ticket from '../components/tickets/Ticket'

export default compose(
  connect({ ticketRequest, routeParams }, { fetchTicketQr }),
  withRouter
)(Ticket)
