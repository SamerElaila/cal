import { takeEvery } from 'redux-saga/effects'

import { CREATE_EVENT, FETCH_EVENTS } from '../constants/action_types'
import { createEvent, fetchEvents } from './events'

export default function* rootSaga() {
  yield takeEvery(CREATE_EVENT, createEvent)
  yield takeEvery(FETCH_EVENTS, fetchEvents)
}
