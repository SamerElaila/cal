import { put } from 'redux-saga/effects'

import {
  STRIPE_CONNECT_CALLBACK_PENDING,
  STRIPE_CONNECT_CALLBACK_SUCCESS,
  STRIPE_CONNECT_CALLBACK_FAILURE
} from '../constants/action_types'
import calApi from '../lib/cal_api.js'

export function* stripeConnectCallback(action) {
  console.log('STRIPE_CONNECT_CALLBACK_PENDING');
  console.log(action);
  yield put({ type: STRIPE_CONNECT_CALLBACK_PENDING })

  try {
    yield calApi.stripeConnectCallback(action)
    yield put({ type: STRIPE_CONNECT_CALLBACK_SUCCESS })
  } catch (error) {
    console.log('!OH NO!', error);
    yield put({ type: STRIPE_CONNECT_CALLBACK_FAILURE, error })
  }
}
