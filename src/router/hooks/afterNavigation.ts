import createHook from '../utils/createHook'
import { isNavigationFailure } from 'vue-router'
export default createHook(async (to, _from, failure) => {
  if (isNavigationFailure(failure)) {
    console.error('Router error navigation', failure)
  }
  const defaultDocumentTitle = import.meta.env.VITE_APP_NAME
  document.title = to.meta?.title
    ? `${defaultDocumentTitle} - ${to.meta.title}`
    : defaultDocumentTitle
})
