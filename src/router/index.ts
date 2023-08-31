import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import errorRoutes from '@/modules/error/router'
import authRoutes from '@/modules/auth/router'

import authGuard from './guard/auth'
import afterNavigation from './hooks/afterNavigation'

const routes: RouteRecordRaw[] = [...authRoutes, ...errorRoutes]

const setupRouter = async (app: ReturnType<typeof createApp>) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return { top: 0 }
    },
    routes,
  })

  // subscribe to the beforeResolve hook to
  // request permissions for subsequent navigation
  router.beforeResolve(() => {})
  router.beforeEach(authGuard)

  // subscribe to the afterEach hook to
  // request critical data and lazy data for subsequent navigation
  router.afterEach(afterNavigation)

  app.use(router)

  return await router.isReady()
}
export default setupRouter
