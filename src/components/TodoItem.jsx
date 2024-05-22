import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil";

function TodoItem({ todo }) {
  const setTodosState = useSetRecoilState(todoState);

  function handleClickDelete() {
    setTodosState((oldTotosState) =>
      oldTotosState.filter((ot) => ot._id !== todo._id)
    );
  }

  function handleClickCheck() {
    setTodosState((oldTodosState) =>
      oldTodosState.map((ot) =>
        ot._id === todo._id ? { ...todo, done: !todo.done } : ot
      )
    );
  }

  return (
    <li className="flex items-center mb-4">
      <span
        className="flex-auto mr-3"
        style={{ textDecoration: todo.done && "line-through" }}>
        {todo.content}
      </span>
      <button
        onClick={handleClickCheck}
        className="p-1 text-white rounded shadow-sm bg-green-500 mr-2">
        {todo.done ? "Uncheck" : "Check"}
      </button>
      <button className="p-1 text-white rounded shadow-sm bg-sky-500 mr-2">
        Edit
      </button>
      <button
        onClick={handleClickDelete}
        className="p-1 text-white rounded shadow-sm bg-red-500">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
