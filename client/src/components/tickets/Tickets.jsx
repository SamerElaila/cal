import React, { Component } from 'react'
import Ticket from '../../containers/Ticket'
import Request from '../Request'

class Tickets extends Component {
  componentDidMount() {
    const { fetchTickets } = this.props

    fetchTickets()
  }

  render() {
    const {
      ticketsRequest
    } = this.props

    console.log('tickets:', {ticketsRequest})

    return [
      <h2 key='1' className='f2 ma4'>Tickets</h2>,
      <Request key='2' {...ticketsRequest}>
        { tickets => tickets.map((ticket, i) => (
          <Ticket key={`ticket-${i}`} ticketId={ticket.id} />
        )) }
      </Request>
    ]
  }
}

export default Tickets
