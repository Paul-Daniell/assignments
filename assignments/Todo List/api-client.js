const baseUrl = new URL("http://localhost:3000/");

const fetchTodo = async () => {
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
  //   console.log(json);
};

const createTodo = async () => {
  const data = { description: todoInput.value, done: false };

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
  //   console.log(json);
};

//DELETE DATA
const deleteTodo = async (id) => {
  const response = await fetch(baseUrl + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: Json.stringify({ id: id }),
  });
};
