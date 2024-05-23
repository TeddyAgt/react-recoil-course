import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil";
import { createTodo } from "../api";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const setTodosState = useSetRecoilState(todoState);

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  async function handleClick() {
    const newTodo = await createTodo({
      content: inputValue,
      done: false,
      edit: false,
    });
    setTodosState((oldTodosState) => {
      return [...oldTodosState, newTodo];
    });
    setInputValue("");
  }

  return (
    <div className="flex items-center mb-4">
      <input
        onChange={handleOnChange}
        value={inputValue}
        className="flex-auto mr-4 border p-1"
        type="text"
      />
      <button
        onClick={handleClick}
        className="py-1 px-2 bg-sky-500 text-white rounded shadow-sm">
        Save Todo
      </button>
    </div>
  );
}

export default AddTodo;
