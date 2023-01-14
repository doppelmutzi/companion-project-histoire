<script lang="ts" setup>
import ActionBar from "@/components/ActionBar.vue";
import { useTodosStore, FilterIndex } from "@/stores/todos";

// TODO auto-props-disabled warum nochmal?

type AppSetup = {
  variant: {
    title: string;
  };
};

const appSetup = (appSetup: AppSetup) => {
  const variant = appSetup.variant.title;
  if (variant === "items left") {
    const { addTodo } = useTodosStore();
    addTodo({
      id: Date.now(),
      date: new Date(Date.now()).toDateString(),
      label: "hello world",
      checked: false,
    });
  } else if (variant === "no items left") {
    const { toggleCheckTodo } = useTodosStore();
    toggleCheckTodo({
      id: 1,
      label: "checked todo",
      date: "today",
      checked: false,
    });
  } else if (variant === "no todos") {
    const { removeTodo } = useTodosStore();
    removeTodo({
      id: 1,
      label: "checked todo",
      date: "today",
      checked: false,
    });
    removeTodo({
      id: 2,
      label: "unchecked todo",
      date: "today",
      checked: true,
    });
  } else if (variant === "active todos") {
    const { setFilterIndex } = useTodosStore();
    setFilterIndex(FilterIndex.UNCHECKED);
  } else if (variant === "completed todos") {
    const { setFilterIndex } = useTodosStore();
    setFilterIndex(FilterIndex.CHECKED);
  }
};
</script>

<template>
  <Story title="components/ActionBar" :setup-app="appSetup">
    <Variant title="items left">
      <ActionBar />
    </Variant>
    <Variant title="no items left">
      <ActionBar />
    </Variant>
    <Variant title="no todos">
      <ActionBar />
    </Variant>
    <Variant title="active todos">
      <ActionBar />
    </Variant>
    <Variant title="completed todos">
      <ActionBar />
    </Variant>
  </Story>
</template>
