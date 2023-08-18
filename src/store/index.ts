import { createApp } from 'vue'
import { createPinia } from 'pinia'

const setupPinia = (app: ReturnType<typeof createApp>) => {
  const store = createPinia()
  app.use(app)
  return store
}

export default setupPinia
