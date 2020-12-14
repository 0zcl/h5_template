<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { ENV } from './env'
console.log('ENV', ENV)
export default {
  name: 'App',
  components: {
  },
  mounted() {
    // 请求加载
    Toast.loading({
      mask: true,
      message: '加载中...',
      className: 'loadingToast',
      duration: 1500
    })

    window.onload = () => {
      console.log('onload finish')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  width: 100%;
  font-size: 28px;
  background:rgba(247,247,247,1)
}
.errorToast {
  width: 300px !important;
  font-size: 28px !important;
  line-height: 40px !important;
}
.loadingToast {
  width: 250px !important;
  font-size: 28px !important;
}

</style>
