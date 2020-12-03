import { registerMicroApps, start } from 'qiankun'
import microApps from '@/config/apps.config'

export default {
  install (Vue, mainApp) {
    registerMicroApps(
      microApps.map(config => {
        return {
          ...config,
          container: '#app-view-box',
          activeRule: loading => loading.pathname.startsWith(`/${config.name}`),
          render: ({ appContent: content, loading } = {}) => {
            mainApp.content = content
            mainApp.loading = loading
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
  }
}
