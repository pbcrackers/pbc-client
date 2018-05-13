import Vue from 'vue'
import Pusher from 'pusher-js';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher(process.env.VUE_APP_PUSHER_API_KEY, {
  cluster: process.env.VUE_APP_PUSHER_CLUSTER,
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(data.message);
});
