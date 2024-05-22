import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import TodoData from "./components/TodoData";
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
      <section className="bg-white p-4 shadow-md w-full rounded mb-2">
        <TodoData />
      </section>
      <section className="bg-white p-4 shadow-md w-full rounded mb-2">
        <AddTodo />
        <TodoList />
      </section>
    </>
  );
}

export default App;

