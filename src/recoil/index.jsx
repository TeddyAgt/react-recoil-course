import { atom, selector, selectorFamily } from "recoil";
import { getAllTodos, getOneTodo } from "../api";

export const todoState = atom({
  key: "todoState",
  default: getAllTodos(),
  effects: [],
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

export const selectTodosData = selector({
  key: "selectTodosData",
  get: ({ get }) => {
    const todos = get(todoState);
    const total = todos.length;
    const totalDone = todos.filter((todo) => todo.done).length;
    const totalOngoing = todos.filter((todo) => !todo.done).length;
    const totalDonePercentage =
      total > 0 ? Math.floor((totalDone / total) * 100) : 0;
    return {
      total,
      totalDone,
      totalOngoing,
      totalDonePercentage,
    };
  },
});

export const selectTodoDetails = selectorFamily({
  key: "selectTodoDetails",
  get:
    (_id) =>
    async ({ get }) => {
      return _id && getOneTodo(_id);
    },
});
