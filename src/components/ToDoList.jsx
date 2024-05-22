import { useRecoilValue } from "recoil";
import { selectFilterTodos, selectTodoDetails } from "../recoil";
import TodoItem from "./TodoItem";
import { useState } from "react";
import TodoDetails from "./TodoDetails";

function TodoList() {
  const [id, setId] = useState(null);
  const filteredTodos = useRecoilValue(selectFilterTodos);
  const todoDetails = useRecoilValue(selectTodoDetails(id));

  function selectTodo(_id) {
    setId(_id);
  }

  return (
    <>
      <ul className="mb-4">
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo._id}
              onClick={() => selectTodo(todo._id)}
              todo={todo}
            />
          ))}
      </ul>
      {todoDetails && <TodoDetails todo={todoDetails} />}
    </>
  );
}

export default TodoList;
