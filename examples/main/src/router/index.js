import Vue from 'vue'
import VueRouter from 'vue-router'
import { BaseLayout } from '@/layouts'
import { appsRoutes } from '@/config/apps.config'

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/primary',
    component: BaseLayout,
    children: [
      ...appsRoutes
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
