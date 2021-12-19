<template>
  <div>
    <div class="row">
      <h3 v-if="!editing">{{ todo.title }}</h3>
      <input
        v-else
        @change="todoTextChange"
        v-bind:value="todoText"
        type="text"
        class="edit-input"
      />
      <button @click="updateTodoI(todo)" class="edit">
        {{ editing ? "Update" : "Edit" }}
      </button>
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
  },
  data() {
    return {
      todoText: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),

    todoTextChange(event) {
      this.todoText = event.target.value;
      console.log(event.target.value);
    },

    updateTodoI(todo) {
      this.editing = this.editing == true ? false : true;
      if(this.editing) {
        this.todoText = this.todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
      }
      console.log(this.editing);
    },
  }
};
</script>

<style>
input {
  background-color: #330202;
  color: white;
  padding: 12px;
  border: 10px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.edit-input {
  width: 20%;
}

button {
  background-color: #42b983;
  color: white;
  padding: 12px;
  border: 10px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  border: 1px solid silver;
  margin-left: 20vw;
}

.edit {
  background-color: rgb(0, 110, 255);
  color: white;
  cursor: pointer;
  position: relative;
  margin-left: 26vw;
}

.delete {
  background-color: rgb(255, 0, 0);
  color: white;
  cursor: pointer;
}
</style>
