<template>
  <div v-if="question" class="question">
    <h1>{{ question.question }}</h1>
    <ul>
      <li v-for="[choice, text] in Object.entries(question.answers)"
          v-bind:key="choice">
        {{ text }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No questions yet!</p>
  </div>
</template>

<script>
export default {
  name: "Question",
  data: function() {
    return {
      selectedAnswer: null
    };
  },
  props: {
    question: null
  }
};
</script>

<style scoped>

</style>
