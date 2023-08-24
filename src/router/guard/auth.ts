import createGuard from '@/router/utils/createGuard'
export default createGuard(async (to, _from, next) => {
  const isAuthenticated = false
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
    return
  }
  if (to.meta.permissions) {
    const hasPermission = false
    if (!hasPermission) {
      next({ name: 'forbidden' })
    } else {
      next()
    }
  }
  next()
})
