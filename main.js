import App from './App'
import uView from 'uview-ui'
import moment from 'moment';
Vue.use(uView)
Vue.prototype.$moment = moment;
import config from '@/common/config/env.js'
Vue.prototype.$config = config;
import api from "@/common/api"
Vue.prototype.$api = api;
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

// uview-request
require('@/common/http/request.js')(app)