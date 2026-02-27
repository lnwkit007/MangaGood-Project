import { createApp } from 'vue'
import router from './router/index'

// import views
import App from './App.vue'

// import styles
import './style.css'
import 'primeicons/primeicons.css'

createApp(App).use(router).mount('#app')
