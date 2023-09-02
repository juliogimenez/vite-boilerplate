import { NavigationHookAfter } from 'vue-router'
function createGuard(guard: NavigationHookAfter): NavigationHookAfter {
  return async (to, from, failure) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await guard(to, from, failure)
    } catch (e) {
      throw e
    }
  }
}
export default createGuard
