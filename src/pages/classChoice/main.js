import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// import Vant from 'vant'
import { Cell, Toast, Popup, Button } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './styles/index.scss'
import Loading from '@/components/common/Loading'
import utilsLibrary from '@i61/utils-library'
import H5SDK from '@i61/h5-sdk'
import mobileUI from 'zcl-mobile-ui'
import { ENV } from './env'
const { AppSDK, WxSDK, LoginSDK } = H5SDK

// Vue.prototype.utilsLibrary = utilsLibrary
// Vue.prototype.AppSDK = AppSDK

const app = createApp(App)
  .use(router)
  .use(Popup)
  .use(Toast)
  .use(Button)
  .use(Cell)
  .use(mobileUI)
  .component('Loading', Loading)


app.config.globalProperties.$utilsLibrary = utilsLibrary
app.config.globalProperties.$AppSDK = new AppSDK()
app.config.globalProperties.$LoginSDK = new LoginSDK()
app.config.globalProperties.$WxSDK = new WxSDK()

console.log('env', ENV)

app.config.globalProperties.$LoginSDK.register({
  env: ENV, // 环境变量
  redirectUrl: location.href,
  isShow: true // 是否展示顶部栏
}).then(res => {
  console.log('register res==>', res)
  app.mount('#app')
})

// 动态导入VConsole
// if (process.env.NODE_ENV !== 'production') {
//   const VConsole = require('vconsole')
//   // eslint-disable-next-line
//   new VConsole()
// }
