import { useRecoilValue } from "recoil";
import { todoState } from "../recoil";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useRecoilValue(todoState);

  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
          />
        ))}
    </ul>
  );
}

export default TodoList;
