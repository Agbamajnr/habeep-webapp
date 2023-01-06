import { createApp } from 'vue'
import './assets/css/style.css'
import './assets/css/tailwind.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import Toast from './components/reusables/Toast.vue'


import { globalCookiesConfig } from "vue3-cookies";
globalCookiesConfig({
    expireTimes: 60 * 60 * 3,
});


const myApp = createApp(App);

myApp.component('Toast', Toast)

myApp.use(router)
myApp.use(store)
myApp.mount('#app')

