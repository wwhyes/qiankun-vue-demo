import Vue from 'vue'
import App from './App.vue'
import router from './router'

import microApps from '@/config/apps.config'
import './permission' // permission control
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

const app = new Vue({
  router,
  data () {
    return {
      content: '',
      loading: false
    }
  },
  render (h) {
    return h(App, { props: this.$data })
  }
}).$mount('#container')

registerMicroApps(
  microApps.map(config => {
    return {
      ...config,
      container: '#app-view-box',
      activeRule: loading => loading.pathname.startsWith(`/${config.name}`),
      render: ({ appContent: content, loading } = {}) => {
        app.content = content
        app.loading = loading
      }
    }
  }),
  {
    beforeLoad: [app => console.log('before load', app)], // 挂载前回调
    beforeMount: [app => console.log('before mount', app)], // 挂载前回调
    beforeUnMount: [app => console.log('before unload', app)] // 挂载前回调
  }
)

start({ prefetch: false })
