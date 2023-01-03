<template>
  <div
    class="toggle-button"
    :class="{ 'all-checked': allChecked, 'is-visible': isVisible }"
  >
    <button>&or;</button>
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { computed, toRaw } from "vue";

const { todosLeft, todos } = useTodosStore();
console.log(toRaw(todos));
const allChecked = computed(() => todosLeft === 0);
const isVisible = computed(() => todos.length > 0);
</script>

<style scoped lang="scss">
.toggle-button {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  > button {
    font-size: 24px;
    font-weight: bold;
    border: 0;
    background: none;
    color: inherit;
    display: none;
  }

  &.is-visible > button {
    display: block;
  }

  &.all-checked > button {
    color: #e6e6e6;
  }
}
</style>
