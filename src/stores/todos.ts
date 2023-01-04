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
enum FilteredIndex {
  // eslint-disable-next-line no-unused-vars
  ALL = 0,
  // eslint-disable-next-line no-unused-vars
  CHECKED = 1,
  // eslint-disable-next-line no-unused-vars
  UNCHECKED = 2,
}

export const useTodosStore = defineStore("todos", {
  state: () => ({
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
    filterIndex: FilteredIndex.ALL,
  }),
  getters: {
    todosLeft: (state) =>
      state.todos.reduce((count, todo) => {
        if (!todo.checked) return count + 1;
        return count;
      }, 0),
    filteredTodos: (state) => {
      if (state.filterIndex === FilteredIndex.ALL) {
        return state.todos;
      } else if (state.filterIndex === FilteredIndex.UNCHECKED) {
        return state.todos.filter((todo) => !todo.checked);
      } else {
        return state.todos.filter((todo) => todo.checked);
      }
    },
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
    setFilterIndex(index: FilteredIndex) {
      this.filterIndex = index;
    },
  },
});
