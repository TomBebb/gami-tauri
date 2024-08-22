import App from './App.vue'
import './main.css'
import { createApp } from 'vue'
import { router } from './routes'

const app = createApp(App)
app.use(router)
app.mount('#app')
