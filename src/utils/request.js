import axios from 'axios'
import Logger from '@/utils/logger'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000,
})

service.interceptors.request.use(config => {
  /*
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  */
  return config
}, err => {
  Logger.log(err)

  Promise.reject(err)
})

export default service
