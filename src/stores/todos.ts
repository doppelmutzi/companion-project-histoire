import theme from "@/theme";
import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

export interface Todo {
  id: number;
  label: string;
  date: string;
  checked: boolean;
}

// eslint-disable-next-line no-unused-vars
export enum FilterIndex {
  // eslint-disable-next-line no-unused-vars
  ALL = 0,
  // eslint-disable-next-line no-unused-vars
  CHECKED = 1,
  // eslint-disable-next-line no-unused-vars
  UNCHECKED = 2,
}

export const useTodosStore = defineStore("todos", {
  state: () => ({
    theme: theme.DARK,
    todos: [
      {
        id: 1,
        label: "checked todo",
        date: "today",
        checked: false,
      },
      {
        id: 2,
        label: "unchecked todo",
        date: "today",
        checked: true,
      },
    ] as Array<Todo>,
    filterIndex: FilterIndex.ALL,
  }),
  getters: {
    todosLeft: (state) =>
      state.todos.reduce((count, todo) => {
        if (!todo.checked) return count + 1;
        return count;
      }, 0),
    filteredTodos: (state) => {
      if (state.filterIndex === FilterIndex.ALL) {
        return state.todos;
      } else if (state.filterIndex === FilterIndex.UNCHECKED) {
        return state.todos.filter((todo) => !todo.checked);
      } else {
        return state.todos.filter((todo) => todo.checked);
      }
    },
    // TODO todosLeft aufrufen
    todosChecked: (state) =>
      state.todos.reduce((count, todo) => {
        if (todo.checked) return count + 1;
        return count;
      }, 0),
  },
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    toggleCheckTodo(todo: Todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      console.log("toggle index", index);
      const updatedTodos = [...this.todos];
      updatedTodos[index] = {
        ...todo,
        checked: !todo.checked,
      };
      console.log(updatedTodos);
      this.todos = updatedTodos;
    },
    removeTodo(todo: Todo) {
      console.log("remove", todo);
      this.todos = [...this.todos.filter((item) => item.id != todo.id)];
    },
    clearCheckedTodos() {
      const uncheckedTodos = this.todos.filter((todo) => !todo.checked);
      this.todos = [...uncheckedTodos];
    },
    setFilterIndex(index: FilterIndex) {
      this.filterIndex = index;
    },
  },
});
