<template>
  <div>{{ todosLeft }} {{ label }}</div>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { todosLeft } = storeToRefs(useTodosStore());
// example where view (label) does not update without computed
const label = computed(() =>
  todosLeft.value > 1 ? "items left" : "item left"
);
</script>
