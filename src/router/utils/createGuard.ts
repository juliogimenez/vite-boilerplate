import { NavigationGuard } from 'vue-router'
function createGuard(guard: NavigationGuard): NavigationGuard {
  return async (to, from, next) => {
    try {
      await guard(to, from, next)
    } catch (e) {
      next(false)
    }
  }
}
export default createGuard
