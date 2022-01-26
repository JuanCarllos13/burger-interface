import axios from 'axios'

const apibuger = axios.create({
  baseURL: 'http://localhost:3001'
})

apibuger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('burger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})
export default apibuger
