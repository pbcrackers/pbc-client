<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Question v-bind:question="currentQuestion"/>
  </div>
</template>

<script>
import Pusher from 'pusher-js';
import Question from './components/Question.vue'

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

export default {
  name: 'app',
  components: {
    Question
  },
  data: function() {
    return {
      currentQuestion: null
    }
  },
  created: function() {
    this.pusher = new Pusher(process.env.VUE_APP_PUSHER_API_KEY, {
      cluster: process.env.VUE_APP_PUSHER_CLUSTER,
      encrypted: true
    })

    this.channel = this.pusher.subscribe('questions');

    this.channel.bind('ask-question', data => {
      this.currentQuestion = data
      console.log(data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
