import Vue from 'vue'
import App from './App.vue'
import realUI from '../packages'

Vue.use(realUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
