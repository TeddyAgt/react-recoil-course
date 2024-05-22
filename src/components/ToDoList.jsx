import { useRecoilValue } from "recoil";
import { selectFilterTodos } from "../recoil";
import TodoItem from "./TodoItem";

function TodoList() {
  const filteredTodos = useRecoilValue(selectFilterTodos);

  return (
    <ul>
      {filteredTodos &&
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
          />
        ))}
    </ul>
  );
}

export default TodoList;
