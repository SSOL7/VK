<template>
  <div class="home">
    <h1>Tilaa tuote</h1>
    <h2>{{ $store.state.todos }}</h2>

    <TodoInput />
    <TodoList />

    <button @click="back">Back</button>
  </div>
</template>

<script>
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    TodoInput,
    TodoList,
  },
  methods: {
    back() {
      this.$router.push("/orders");
    },
  },
};
</script>

<style scoped>
button {
  background: #42b983;
  color: #fff;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
