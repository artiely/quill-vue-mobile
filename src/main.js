import Vue from 'vue'
import App from './App'
import quillVueMobile from './index.js'
Vue.config.productionTip = false
Vue.use(quillVueMobile)
new Vue({
  render: h => h(App)
}).$mount('#app')
