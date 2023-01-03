<template>
  <div>TodoList</div>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">{{ todo.label }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";

const { filteredTodos } = useTodosStore();
</script>

<style scoped></style>
