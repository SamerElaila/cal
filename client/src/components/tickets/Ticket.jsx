import React, { Component } from 'react'

import Request from '../Request'
import { Card, CardPrimary, CardTitle, CardMedia } from 'rmwc/Card'

const TicketQr = ({ ticketQrRequest }) => (
  <Request {...ticketQrRequest}>
    { ticketQr => (
      <CardMedia>
        <div
          dangerouslySetInnerHTML={{ __html: ticketQr.ticketQrCodeSvg }}
        />
      </CardMedia>
    ) }
  </Request>
)

export default class Ticket extends Component {
  componentDidMount() {
    const {
      ticketId,
      fetchTicketQr
    } = this.props

    fetchTicketQr(ticketId)
  }

  render() {
    const {
      ticketRequest,
    } = this.props

    console.log('ticket:', { ticketRequest });

    return (
      <Card className='ma3'>
        <CardPrimary>
          <Request {...ticketRequest}>
            { ticket => ([
              <CardTitle key='0'>
                <h3 className='f4'>{ticket.name}</h3>
              </CardTitle>,
              <TicketQr key='1' ticketQrRequest={ticket.ticketQrRequest} />
            ]) }
          </Request>
        </CardPrimary>
      </Card>
    )
  }
}
