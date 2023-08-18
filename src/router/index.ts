import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import errorRoutes from '@/modules/error/router'
import authRoutes from '@/modules/auth/router'
const setupRouter = (app: ReturnType<typeof createApp>) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return { top: 0 }
    },
    routes: [...authRoutes, ...errorRoutes],
  })
  // const defaultDocumentTitle = 'POGO'
  //
  //
  //
  // router.beforeEach((_to, _from, next) => {
  //   next()
  // })
  //
  // router.afterEach(async (to, _from, failure) => {
  //   if (isNavigationFailure(failure)) {
  //     console.error('failed shared', failure)
  //   }
  //   document.title = to.meta?.title
  //     ? `${defaultDocumentTitle} - ${to.meta.title}`
  //     : defaultDocumentTitle
  // })
  router.onError((error) => {
    console.error('Router error:', error)
  })
  app.use(router)
  return router
}
export default setupRouter
