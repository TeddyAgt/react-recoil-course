import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const filterState = atom({
  key: "filterState",
  default: "all",
});

export const selectFilterTodos = selector({
  key: "selectFilterTodos",
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todoState);
    switch (filter) {
      case "done": {
        return todos.filter((todo) => todo.done);
      }
      case "ongoing": {
        return todos.filter((todo) => todo.done === false);
      }
      default: {
        return todos;
      }
    }
  },
});
