import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '../routers/router'


// 开启全局pina功能

import { createPinia } from "pinia"
let pina = createPinia()

const app = createApp(App)
app.use(router)
app.use(pina)
app.mount('#app')
