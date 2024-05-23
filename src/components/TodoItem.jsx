import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil";
import { useState } from "react";
import {
  updateTodo as updateTodoOnServer,
  deleteTodo as deleteTodoOnServer,
} from "../api";

function TodoItem({ todo, onClick }) {
  const setTodosState = useSetRecoilState(todoState);
  const [inputValue, setInputValue] = useState(todo.content);

  async function handleClickDelete() {
    await deleteTodoOnServer(todo._id);
    setTodosState((oldTotosState) =>
      oldTotosState.filter((ot) => ot._id !== todo._id)
    );
  }

  async function handleEditTodo(editedTodo) {
    const updatedTodo = await updateTodoOnServer(editedTodo);
    setTodosState((oldTodosState) =>
      oldTodosState.map((ot) => (ot._id === updatedTodo._id ? updatedTodo : ot))
    );
  }

  return (
    <li className="flex items-center mb-4">
      {todo.edit ? (
        <>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="mr-4 flex-auto border p-1"
            type="text"
          />
          <button
            onClick={() => {
              handleEditTodo({ ...todo, content: inputValue, edit: false });
            }}
            className="p-1 text-white rounded shadow-sm bg-sky-500 mr-2">
            Edit
          </button>
          <button
            onClick={() => {
              handleEditTodo({ ...todo, edit: false });
            }}
            className="p-1 text-white rounded shadow-sm bg-red-500">
            Delete
          </button>
        </>
      ) : (
        <>
          <span
            className="flex-auto mr-3"
            style={{ textDecoration: todo.done && "line-through" }}>
            {todo.content}
          </span>
          <button
            onClick={() => handleEditTodo({ ...todo, done: !todo.done })}
            className="p-1 text-white rounded shadow-sm bg-green-500 mr-2">
            {todo.done ? "Uncheck" : "Check"}
          </button>
          <button
            onClick={() => {
              handleEditTodo({ ...todo, edit: true });
            }}
            className="p-1 text-white rounded shadow-sm bg-sky-500 mr-2">
            Edit
          </button>
          <button
            onClick={handleClickDelete}
            className="p-1 text-white rounded shadow-sm bg-red-500 mr-2">
            Delete
          </button>
          <button
            onClick={onClick}
            className="p-1 text-white rounded shadow-sm bg-sky-500 mr-2">
            Details
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
