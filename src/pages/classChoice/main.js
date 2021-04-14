import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Vant from 'vant'
import 'lib-flexible/flexible'
import './styles/index.scss'
import Loading from '@/components/common/Loading'
import Vuex from 'vuex'
import store from './store/index.js'
import utilsLibrary from '@i61/utils-library'
import { AppSDK } from '@i61/h5-sdk'

Vue.prototype.utilsLibrary = utilsLibrary
Vue.prototype.AppSDK = AppSDK

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Vuex)

// 全局组件
Vue.component('Loading', Loading)

// 动态导入VConsole
if (process.env.NODE_ENV !== 'production') {
  const VConsole = require('vconsole')
  // eslint-disable-next-line no-new
  new VConsole()
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
