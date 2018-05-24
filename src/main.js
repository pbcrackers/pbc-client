import Vue from 'vue'
import App from './App.vue'

import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    currentQuestion: null,
    gameJoined: false
  }
}).$mount('#app')
