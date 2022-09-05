import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import router from './routers/cont.js' 
createApp(App).use(router).mount('#app')
