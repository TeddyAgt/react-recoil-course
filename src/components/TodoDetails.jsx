function TodoDetails({ todo: { _id, createdAt } }) {
  return (
    <div className="">
      <ul>
        <li>Created on: {createdAt}</li>
        <li>id: {_id}</li>
      </ul>
    </div>
  );
}

export default TodoDetails;
