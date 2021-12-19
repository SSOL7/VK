<template>
  <input @change="todoTextChange" v-bind:value="todoText" type="text" />
  <button @click="addTodoI">Lisää</button>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
import { mapActions } from "vuex";
//import {v1} from "uuid";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(event) {
      this.todoText = event.target.value;
      console.log(event.target.value);
    },
    addTodoI() {
      this.addTodo({
        title: this.todoText,
        //id: v1(),
      });
      this.todoText = "";
    }
  },
};
</script>

<style></style>
