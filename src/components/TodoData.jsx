import { useRecoilValue } from "recoil";
import { selectTodosData } from "../recoil";

function TodoData() {
  const data = useRecoilValue(selectTodosData);

  return (
    <ul>
      <li>Number of todos: {data.total}</li>
      <li>Number of done todos: {data.totalDone}</li>
      <li>Number of ongoing todos: {data.totalOngoing}</li>
      <li>Percentage of done todos: {data.totalDonePercentage} %</li>
    </ul>
  );
}

export default TodoData;
