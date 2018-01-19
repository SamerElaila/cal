import { put } from 'redux-saga/effects'

export const requestSaga = (actionType, request) => {
  return function * saga (action) {
    const meta = { initiatorAction: action }

    yield put({ type: `${actionType}_PENDING`, meta })

    try {
      const payload = yield request(action)
      yield put({ type: `${actionType}_SUCCESS`, payload, meta })
    } catch (error) {
      yield put({ type: `${actionType}_ERROR`, error, meta })
    }
  }
}
