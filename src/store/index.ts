import { createApp } from 'vue'
import { createPinia } from 'pinia'

const setupPinia = (app: ReturnType<typeof createApp>) => {
  const store = createPinia()
  app.use(store)
}

export default setupPinia
