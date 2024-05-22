import { useRecoilState } from "recoil";
import { filterState } from "../recoil";

function FilterTodo() {
  const [filter, setFilterState] = useRecoilState(filterState);

  function handleChange(e) {
    setFilterState(e.target.value);
  }

  return (
    <select
      onChange={handleChange}
      value={filter}
      name=""
      id=""
      className="p-1">
      <option value="all">All</option>
      <option value="ongoing">Ongoing</option>
      <option value="done">Done</option>
    </select>
  );
}

export default FilterTodo;
