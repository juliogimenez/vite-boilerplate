import { NavigationHookAfter } from 'vue-router'
function createGuard(guard: NavigationHookAfter): NavigationHookAfter {
  return async (to, from, failure) => {
    try {
      await guard(to, from, failure)
    } catch (e) {
      throw e
    }
  }
}
export default createGuard
