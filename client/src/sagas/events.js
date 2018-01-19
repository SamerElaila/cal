import { requestSaga } from '../utils/saga'
import {
  CREATE_EVENT,
  FETCH_EVENTS
} from '../constants/action_types'

import calApi from '../lib/cal_api.js'

export const createEvent = requestSaga(CREATE_EVENT, calApi.createEvent)
export const fetchEvents = requestSaga(FETCH_EVENTS, calApi.fetchEvents)
