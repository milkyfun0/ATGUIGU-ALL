import { createApp } from 'vue'
// import './style.css'

// 整个APP可以使用

import router from './routers/router'


import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')