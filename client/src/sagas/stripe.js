import { requestSaga } from '../utils/saga'
import { STRIPE_CONNECT_CALLBACK } from '../constants/action_types'
import calApi from '../lib/cal_api.js'

export const stripeConnectCallback = requestSaga(
  STRIPE_CONNECT_CALLBACK,
  calApi.stripeConnectCallback
)
