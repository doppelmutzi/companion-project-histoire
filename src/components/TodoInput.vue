<template>
  <div class="todo-input">
    <ToggleButton />
    <input
      v-model="inputValue"
      :placeholder="placeholder"
      @keyup.enter="onEnter"
    />
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import ToggleButton from "./ToggleButton.vue";
import translation from "@/translation";
import { ref } from "vue";

const { todoInput, getPreferedLang } = translation;
const lang: string = getPreferedLang();
// FIXME how to type this?
const placeholder = todoInput.placeholder[lang];

let inputValue = ref("asdf");

const { addTodo } = useTodosStore();

const onEnter = (evt: Event) => {
  const { value } = <HTMLInputElement>evt.target;
  if (value.trim() !== "") {
    addTodo({
      id: Date.now(),
      date: new Date(Date.now()).toDateString(),
      label: value.trim(),
      checked: false,
    });
    inputValue.value = "";
  }
};
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
