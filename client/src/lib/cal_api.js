import axios from 'axios'

import auth from './auth'

const user = axios.create()

user.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${auth.getAccessToken()}`
  },
  baseURL: `/api/user/${auth.getUserId()}/`
}))

export const createEvent = ({ payload }) => user.post(`event`, payload)
export const fetchEvents = () => user.get('event')

export default {
  createEvent,
  fetchEvents
}
