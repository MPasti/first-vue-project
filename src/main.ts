import './assets/main.css'
// @ts-ignore
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'
import * as RiIcons from 'oh-vue-icons/icons/ri'

const Fa = Object.values({ ...FaIcons })
const Ri = Object.values({ ...RiIcons })

addIcons(...Fa)
addIcons(...Ri)

createApp(App).component('v-icon', OhVueIcon).use(router).mount('#app')
