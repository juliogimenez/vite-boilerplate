import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import errorRoutes from '@/modules/error/router'
import authRoutes from '@/modules/auth/router'

import authGuard from './guard/auth'

const setupRouter = (app: ReturnType<typeof createApp>) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return { top: 0 }
    },
    routes: [...authRoutes, ...errorRoutes],
  })

  // generic guard here
  router.beforeEach(authGuard)

  app.use(router)
}
export default setupRouter
