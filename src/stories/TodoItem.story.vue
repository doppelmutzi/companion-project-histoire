<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import type { Todo } from "@/stores/todos";

type TodoItemState = {
  todo: Todo;
};

const initState = (): TodoItemState => ({
  todo: {
    id: 3,
    label: "a label",
    date: "a date string",
    checked: false,
  },
});
</script>

<template>
  <Story title="components/TodoItem">
    <Variant title="structured controls" :init-state="initState">
      <template #default="{ state }">
        <TodoItem :todo="state.todo" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.todo.label" title="label" />
        <HstText v-model="state.todo.date" title="date" />
        <HstCheckbox v-model="state.todo.checked" title="checked" />
      </template>
    </Variant>
    <Variant title="json control" :init-state="initState">
      <template #default="{ state }">
        <TodoItem :todo="state.todo" />
      </template>
      <template #controls="{ state }">
        <HstJson v-model="state.todo" title="todo2" />
      </template>
    </Variant>
  </Story>
</template>
