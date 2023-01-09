const addTask = async () => {
  const input = findInputValue();
  if (input === "") {
    return;
  } else {
    const taskInput = { task: input, done: false };
    await postToDoItem(taskInput);
    buildDom();
  }
};

const deleteTask = async (index) => {
  const onTask = await searchTaskId(index);
  await deleteToDoItem(onTask._id);
  buildDom();
};

const updateTask = async (item, index) => {
  const onTask = await searchTaskId(index);
  let update = {};
  switch (item.type) {
    case "checkbox":
      switch (onTask.done) {
        case false:
          update = { task: onTask.task, done: true };
          break;
        case true:
          update = { task: onTask.task, done: false };
      }
      break;
    case "text":
      update = { task: item.value, done: onTask.done };
      break;
  }
  await putToDoItem(onTask._id, update);
  buildDom();
};

const searchTaskId = async (index) => {
  const allTasks = await getToDoList();
  const tasks = allTasks[index];
  return tasks;
};

const createCompleteLi = (task) => {
  const newLi = document.createElement("li");
  const newCheckbox = document.createElement("input");
  const newTextElement = document.createElement("input");
  const newTrash = document.createElement("img");

  newLi.classList.add("list__item");
  newCheckbox.classList.add("list__item--checkbox");
  newTextElement.classList.add("list__item--taskValue");
  newTrash.classList.add("list__item--trash");
  newCheckbox.setAttribute("type", "checkbox");
  newTextElement.setAttribute("type", "text");
  newTrash.setAttribute("src", "./img/trash.png");

  if (task.done === true) {
    newCheckbox.checked = true;
    newTextElement.classList.add("checked");
  }
  newTextElement.value = task.task;

  newLi.appendChild(newCheckbox);
  newLi.appendChild(newTextElement);
  newLi.appendChild(newTrash);
  return newLi;
};

const buildDom = async () => {
  const allTasks = await getToDoList();
  const list = document.querySelector(".todo-list");
  list.innerHTML = "";

  allTasks.forEach((task) => {
    list.appendChild(createCompleteLi(task));
  });

  EventlistnerForListItems();
};

const EventlistnerForListItems = () => {
  Array.from(document.querySelectorAll(".list__item--checkbox")).forEach(
    (checkbox, index) => {
      checkbox.addEventListener("change", () => {
        updateTask(checkbox, index);
      });
    }
  );

  Array.from(document.querySelectorAll(".list__item--taskValue")).forEach(
    (task, index) => {
      task.addEventListener("click", () => {
        task.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            updateTask(task, index);
          } else if (event.key === "Escape") {
            buildDom();
          }
        });
      });
    }
  );

  Array.from(document.querySelectorAll(".list__item--trash")).forEach(
    (wastebin, index) => {
      wastebin.addEventListener("click", () => {
        deleteTask(index);
      });
    }
  );
};

const findInputValue = () => {
  const inputContainer = document.querySelector(".input-text");
  const input = inputContainer.value;
  inputContainer.value = "";
  return input;
};

const addEventListenerForInput = () => {
  document.querySelector(".input-text").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  document.querySelector(".input-btn").addEventListener("click", addTask);
};

addEventListenerForInput();
buildDom();
