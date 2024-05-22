import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <header className="flex justify-center items-center p-4">
      <div className="bg-white p-4 shadow-md w-full rounded">
        <h1 className="text-xl font-bold mb-4">ToDo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </header>
  );
}

export default App;

