import {
  CAL_API_REQUEST
} from '../constants/action_types.js'
import request from 'request'

export default ({ dispatch }) => next => action => {
  if (action.type !== CAL_API_REQUEST) return next(action)

  const {
    meta: {
      requestActionType
    },
    payload
  } = action

  dispatch({
    type: `${requestActionType}_PENDING`
  });

  return request(payload)
    .then(response => {
      dispatch({
        type: `${requestActionType}_SUCCESS`,
        payload: response,
        meta: {
          originalAction: action,
          ...action.meta
        }
      });
    }).catch(error => {
      dispatch({
        type: `${requestActionType}_FAILURE`,
        payload: error,
        meta: {
          originalAction: action
        }
      })
    })
}
