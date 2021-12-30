import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import store from './store.js'
import router from "./router.js"
import './index.css'
// Vue.use(Vuex)


const app =  createApp(App);
app.config.performance = false
app.use(createStore(store))
app.use(router)
app.mount('#app')