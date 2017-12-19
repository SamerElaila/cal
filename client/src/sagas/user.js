import { put } from 'redux-saga/effects'

import {
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE
} from '../constants/action_types'
import calApi from '../lib/cal_api.js'

export function* fetchUserInfo(action) {
  yield put({ type: FETCH_USER_INFO_PENDING })

  try {
    const payload = yield calApi.fetchUserInfo(action)
    yield put({ type: FETCH_USER_INFO_SUCCESS, payload })
  } catch (error) {
    console.log('!OH NO!', error);
    yield put({ type: FETCH_USER_INFO_FAILURE, error })
  }
}
