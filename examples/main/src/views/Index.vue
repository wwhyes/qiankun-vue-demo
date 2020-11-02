<script>
import { loadMicroApp } from 'qiankun'
export default {
  name: 'Index',
  mounted () {
    loadMicroApp({
      container: '#app-view-box',
      entry: 'http://localhost:7101',
      name: 'vue'
    }, {
      getTemplate (tpl) {
        const AMapScript = `<script type="text/javascript" src="https://webapi.amap.com/maps?v=2.0&key=cf0d803383ea8ae4d67cbc63fa0f5282">${'<'}/script>`
        return tpl.replace(AMapScript, '')
      }
    })
  },
  render: h => h('div', { domProps: { id: 'app-view-box' } })
}
</script>

<style>
#app-view-box [data-name="vue"] {
  height: 100vh;
}
</style>
