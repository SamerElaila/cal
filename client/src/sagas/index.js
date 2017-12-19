import { takeEvery } from 'redux-saga/effects'

import {
  CREATE_EVENT,
  FETCH_EVENTS,
  STRIPE_CONNECT_CALLBACK,
  FETCH_USER_INFO
} from '../constants/action_types'
import { createEvent, fetchEvents } from './events'
import { stripeConnectCallback } from './stripe'
import { fetchUserInfo } from './user'

export default function* rootSaga() {
  yield takeEvery(CREATE_EVENT, createEvent)
  yield takeEvery(FETCH_EVENTS, fetchEvents)
  yield takeEvery(STRIPE_CONNECT_CALLBACK, stripeConnectCallback)
  yield takeEvery(FETCH_USER_INFO, fetchUserInfo)
}
