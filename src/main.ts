import './style.css'
import { createApp } from 'vue'
import setupRouter from '@/router'
import setupPinia from '@/store'
import App from './App.vue'
const app = createApp(App)
setupPinia(app)
setupRouter(app)
app.mount('#app')
