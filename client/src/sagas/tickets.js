import history from '../lib/history'
import { FETCH_TICKET_QR, FETCH_TICKETS } from '../constants/action_types'
import calApi from '../lib/cal_api'
import { requestSaga } from '../utils/saga'

export const fetchTicketQR = requestSaga(FETCH_TICKET_QR, calApi.fetchTicketQR)
export const fetchTickets = requestSaga(FETCH_TICKETS, calApi.fetchTickets)
