<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Question v-if="gameJoined" 
              v-bind:question="currentQuestion"/>
    <JoinGame v-else
              v-bind:gameCode="gameCode"
              v-on:join-game="joinGame"/>
  </div>
</template>

<script>
import Pusher from 'pusher-js';
import Question from './components/Question.vue'
import JoinGame from './components/JoinGame.vue'

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

export default {
  name: 'app',
  components: {
    Question,
    JoinGame
  },
  data: function() {
    return {
      currentQuestion: null,
      gameJoined: false,
      gameCode: null
    }
  },
  created: function() {
    this.pusher = new Pusher(process.env.VUE_APP_PUSHER_API_KEY, {
      cluster: process.env.VUE_APP_PUSHER_CLUSTER,
      encrypted: true
    })
  },
  methods: {
    joinGame: function(gameCode) {
      console.log("Attempting to join game " + gameCode)

      // This should only trigger when a game code is entered
      this.channel = this.pusher.subscribe('game-' + gameCode)

      this.channel.bind('ask-question', data => {
        this.currentQuestion = data
        console.log(data)
      })

      this.gameJoined = true
    }
  }
}
</script>

<style>
html {
  background-color: #c0d8e0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
