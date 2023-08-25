import { createApp } from 'vue'
import setupRouter from '@/router'
import setupPinia from '@/store'

import App from './App.vue'
import './assets/css/style.css'

const app = createApp(App)

await setupPinia(app)
await setupRouter(app)

app.mount('#app')
