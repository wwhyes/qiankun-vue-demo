import Vue from 'vue'
import App from './App.vue'
import router from './router'

import appsConfig from '@/config/apps.config'
import './permission' // permission control
import {
  registerMicroApps, // 注册子应用
  start // 启动
} from 'qiankun'

Vue.config.productionTip = false

let app

/**
 * 渲染函数
 * appContent 子应用html
 * loading 如果主应用设置loading效果，可不要
 */
function render ({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      router,
      data () {
        return {
          content: appContent,
          loading
        }
      },
      render (h) {
        const { content, loading } = this
        return h(App, {
          props: {
            content,
            loading
          }
        })
      }
    }).$mount('#container')
  } else {
    app.content = appContent
    app.loading = loading
  }
}

registerMicroApps(
  [
    ...appsConfig.map(app => {
      const { name } = app
      return {
        ...app,
        container: '#app-view-box',
        activeRule: loading => loading.pathname.startsWith(`/${name}`),
        render
      }
    })
  ],
  {
    // 挂载前回调
    beforeLoad: [
      (app) => {
        console.log('before load', app)
      }
    ],
    // 挂载前回调
    beforeMount: [
      (app) => {
        console.log('before mount', app)
      }
    ],
    // 挂载前回调
    beforeUnMount: [
      (app) => {
        console.log('before unload', app)
      }
    ]
  }
)

render()
start({ prefetch: false })
