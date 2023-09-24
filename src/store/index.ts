import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const setupPinia = (app: ReturnType<typeof createApp>) => {
  const pinia = createPinia()
  pinia.use(createPersistedState({}))
  app.use(pinia)
}

export default setupPinia
