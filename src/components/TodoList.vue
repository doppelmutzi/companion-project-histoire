<template>
  <div class="todo-list">
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import TodoItem from "./TodoItem.vue";

const { filteredTodos } = useTodosStore();
</script>
