import { FETCH_USER_INFO, } from '../constants/action_types'
import { requestSaga } from '../utils/saga'
import calApi from '../lib/cal_api.js'

export const fetchUserInfo = requestSaga(FETCH_USER_INFO, calApi.fetchUserInfo)
