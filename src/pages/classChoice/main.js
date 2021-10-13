import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './styles/index.scss'
// import Loading from '@/components/common/Loading'
// import utilsLibrary from '@i61/utils-library'
// import { AppSDK } from '@i61/h5-sdk'
import mobileUI from 'zcl-mobile-ui'
// import 'zcl-mobile-ui/lib/index.css'

// Vue.prototype.utilsLibrary = utilsLibrary
// Vue.prototype.AppSDK = AppSDK

createApp(App)
  .use(router)
  .use(Vant)
  .use(mobileUI)
  .mount('#app')

// Vue.use(mobileUI)

// 全局组件
// Vue.component('Loading', Loading)

// 动态导入VConsole
// if (process.env.NODE_ENV !== 'production') {
//   const VConsole = require('vconsole')
//   // eslint-disable-next-line
//   new VConsole()
// }

// new Vue({
//   render: h => h(App),
//   router,
//   store
// }).$mount('#app')
