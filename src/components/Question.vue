<template>
  <div v-if="question" class="question">
    <header><h1>{{ question.question }}</h1></header>
    <section>
      <ul class="answers">
        <li v-for="[choice, text] in Object.entries(question.answers)"
            v-bind:key="choice"
            class="answer">
          <button>{{ text }}</button>
        </li>
      </ul>
    </section>
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
  .question section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  ul {
    list-style: none;
    padding: 0;
    position: relative;
  }
  li {
    padding: 0.5em 0;
  }
  button {
    background-color: #311847;
    border: 4px solid white;
    color: white;
    cursor: pointer;
    font-weight: 700;
    padding: 0.5em;
  }
  button:hover {
    background-color: white;
    color: #311847;
    border: 4px solid #311847;
  }
</style>
