import './assets/main.css'
// @ts-ignore
import router from './router'
import Toast from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import { createApp } from 'vue'
import App from './App.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'
import * as RiIcons from 'oh-vue-icons/icons/ri'
import 'vue-toastification/dist/index.css'

const options: PluginOptions = {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true,
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      return false
    }
    return toast
  }
}

const Fa = Object.values({ ...FaIcons })
const Ri = Object.values({ ...RiIcons })

addIcons(...Fa)
addIcons(...Ri)

createApp(App).component('v-icon', OhVueIcon).use(Toast, options).use(router).mount('#app')
