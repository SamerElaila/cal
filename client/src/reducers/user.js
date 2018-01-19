import {
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_SUCCESS
} from '../constants/action_types'
import { createReducer } from '../utils/redux'

const initialState = {
  userInfo: undefined,
  isFetchingUserInfo: true
}

const fetchUserInfoPending = (state, { payload }) => ({
  ...state,
  isFetchingUserInfo: true
})

const fetchUserInfoSuccess = (state, { payload }) => ({
  ...state,
  userInfo: payload && payload.data,
  isFetchingUserInfo: false
})

export default createReducer(initialState, {
  [FETCH_USER_INFO_SUCCESS]: fetchUserInfoSuccess,
  [FETCH_USER_INFO_PENDING]: fetchUserInfoPending
})
