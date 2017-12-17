import { put } from 'redux-saga/effects'

import {
  CREATE_EVENT_PENDING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE
} from '../constants/action_types'

import calApi from '../lib/cal_api.js'

export function* createEvent (action) {
  console.log('IN THE SAGA');
  yield put({ type: CREATE_EVENT_PENDING })

  try {
    const payload = yield calApi.createEvent(action)
    yield put({ type: CREATE_EVENT_SUCCESS, payload })
  } catch (error) {
    yield put({ type: CREATE_EVENT_FAILURE, error })
  }
}
