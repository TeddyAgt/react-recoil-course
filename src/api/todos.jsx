const TODO_API_URL = "https://restapi.fr/api/tagt_recoil-todo";

export async function getAllTodos() {
  const response = await fetch(TODO_API_URL);

  if (response.ok) {
    const body = await response.json();
    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error("Error: getAllTodos");
  }
}

export async function getOneTodo(_id) {
  const response = await fetch(`${TODO_API_URL}/${_id}`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: getOneTodo");
  }
}

export async function createTodo(newTodo) {
  const response = await fetch(TODO_API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: createTodo");
  }
}

export async function updateTodo(todoToUpdate) {
  const { _id, ...todoRest } = todoToUpdate;
  const response = await fetch(`${TODO_API_URL}/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todoRest),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: updateTodo");
  }
}

export async function deleteTodo(_id) {
  const response = await fetch(`${TODO_API_URL}/${_id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: deleteTodo");
  }
}
