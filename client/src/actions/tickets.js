import {
  FETCH_TICKETS,
  FETCH_TICKET_QR
} from '../constants/action_types.js'

export const fetchTickets = () => {
  return {
    type: FETCH_TICKETS
  }
}

export const fetchTicketQr = ticketId => {
  return {
    type: FETCH_TICKET_QR,
    payload: { ticketId }
  }
}
