import { takeEvery } from 'redux-saga/effects'

import { CREATE_EVENT } from '../constants/action_types'
import { createEvent } from './events'

export default function* rootSaga() {
  yield takeEvery(CREATE_EVENT, createEvent)
}
