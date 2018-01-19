import { STRIPE_CONNECT_CALLBACK } from '../constants/action_types'

export const stripeConnectCallback = stripeCallbackUrlSearch =>
  console.log('STRIPE_CONNECT_CALLBACK') || {
    type: STRIPE_CONNECT_CALLBACK,
    payload: { stripeCallbackUrlSearch }
  }
