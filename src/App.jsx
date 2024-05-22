import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <header className="flex justify-center items-center mb-8">
        <div className="bg-white p-4 shadow-md w-full rounded flex justify-between items-center">
          <h1 className="text-xl font-bold mb-4">ToDo App</h1>
          <FilterTodo />
        </div>
      </header>
      <main className="bg-white p-4 shadow-md w-full rounded">
        <AddTodo />
        <TodoList />
      </main>
    </>
  );
}

export default App;

