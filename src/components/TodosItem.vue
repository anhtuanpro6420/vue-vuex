<template>
  <div class="todos-item" v-bind:class="{ completed: todo.completed }">
    <span class="item-id">{{ todo.id }}</span>
    <h1 class="item-title">{{ todo.title }}</h1>
    <button
      class="btn-completed"
      @click="$emit('toggle-event', todo)"
      v-if="!todo.completed"
    >
      Completed
    </button>
    <button
      class="btn-not-completed"
      @click="$emit('toggle-event', todo)"
      v-else
    >
      Not Completed
    </button>
  </div>
</template>

<script>
export default {
  name: "TodosItem",
  props: {
    todo: Object
  },
  data() {
    return {
      todosApi: "https://jsonplaceholder.typicode.com/todos"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  background: orange;
}
.completed {
  background-color: green;
}
</style>
