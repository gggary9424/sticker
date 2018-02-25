import axios from 'axios'
import Logger from '@/utils/logger'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000,
})

service.interceptors.request.use(config => {
  if (store.state.user.token) {
    config.headers['Bearer'] = store.state.user.token
  }

  return config
}, err => {
  Logger.log(err)

  Promise.reject(err)
})

export default service
