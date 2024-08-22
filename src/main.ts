import App from './App.vue'
import './main.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { router } from './routes'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
const app = createApp(App)
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
