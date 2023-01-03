<template>
  <div class="todo-input">
    <ToggleButton />
    <input value="hello" />
  </div>
</template>

<script setup lang="ts">
import ToggleButton from "./ToggleButton.vue";
</script>

<style scoped lang="scss">
.todo-input {
  display: flex;

  > * {
    height: 50px;
  }

  > input {
    flex: 1;
    background: white;
    border: 0;
    font-size: 24px;
    &::placeholder {
      color: #d9d9d9;
      font-style: italic;
    }
  }
}
</style>
