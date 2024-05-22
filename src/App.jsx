import { useRecoilValue } from "recoil";
import AddTodo from "./components/AddTodo";
import { todoState } from "./recoil";

function App() {
  const todos = useRecoilValue(todoState);
  console.log(todos);

  return (
    <header className="flex justify-center items-center p-4">
      <div className="bg-white p-4 shadow-md w-full rounded">
        <h1 className="text-xl font-bold mb-4">ToDo App</h1>
        <AddTodo />
      </div>
    </header>
  );
}

export default App;

