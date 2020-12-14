import axios from 'axios'
import { Toast } from 'vant'
export default function createAxios(conf = {}) {
  console.log('conf', conf, type)
  const service = axios.create(conf)
  // request拦截器
  service.interceptors.request.use(
    config => {
      return config
    }
  )
  service.interceptors.response.use(
    response => {
      const res = response.data
      // if the custom code is not 20000, it is judged as an error.
      if (res || res.success || res.succeed) {
        // 登录过期
        if (res.code === 621) {
          Toast.fail({
            message: '您的账号登录信息已失效，即将跳转登录页',
            className: 'errorToast'
          })
          setTimeout(() => {
            // 跳转
          }, 2000)
        }
        if ([620, 622, 623].includes(res.code)) {
          Toast.fail({
            message: '当前未登录',
            className: 'errorToast'
          })
        }
        return res
      } else {
        Toast.fail({
          message: res.msg || res.message
        })
        return Promise.reject(res)
      }
    },
    error => {
      Toast.fail({
        message: '网络错误,请重新登录',
        className: 'errorToast'
      })
      return Promise.reject(error)
    }
  )
  return service
}
