<script setup lang="ts">
import FilterButtons from "@/components/FilterButtons.vue";
import { useTodosStore } from "@/stores/todos";

const setupApp = () => {
  const { toggleDarkMode } = useTodosStore();
  toggleDarkMode();
};
</script>
<template>
  <Story title="components/ActionBar/FilterButtons" :setup-app="setupApp">
    <FilterButtons />
  </Story>
</template>
