console.log("first");
const state = {
  todos: []
};

const LOCAL_STORAGE = "todoList";

const CLASS_LISTS = {
  INPUT: { VALID: "input-valid", INVALID: "input-invalid" },
  ERROR: { SHOW: "error-show", HIDE: "error-hide" }
};

const formEl = document.querySelector(".todo-form");
const titleInput = formEl.querySelector("#title");
const descriptionInput = formEl.querySelector("#description");
const dateInput = formEl.querySelector("#date");
const todoContainer = document.querySelector(".todos-container");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs(formEl);
});

function init() {
  let todoList = localStorage.getItem(LOCAL_STORAGE);
  if (!todoList) return;

  state.todos = JSON.parse(todoList);
  state.todos.forEach((todo) => renderTodo(todo));
}

function validateInputs(formEl) {
  let formState = {
    title: {
      value: titleInput.value,
      isValid: false,
      element: titleInput,
      errorElement: formEl.querySelector("#title-error")
    },
    description: {
      value: descriptionInput.value,
      isValid: false,
      element: descriptionInput,
      errorElement: formEl.querySelector("#description-error")
    },
    date: {
      value: dateInput.value,
      isValid: false,
      element: dateInput,
      errorElement: formEl.querySelector("#date-error")
    }
  };

  Object.values(formState).forEach((obj) => {
    const options = {
      inputEl: obj.element,
      errEl: obj.errorElement,
      isError: true
    };

    // validation for date input must be future date
    if (obj.element.id === "date") {
      const currentDate = new Date();
      const selectedDate = new Date(obj.value);
      console.log("🚀 ~ Object.values ~ selectedDate:", selectedDate);
      if (!isDateValid(selectedDate) || selectedDate < currentDate) {
        options.msg = "Please select a future date";
        renderErrorEl(options);
        return;
      }
      options.isError = false;
      obj.isValid = true;
      renderErrorEl(options);
      return;
    }

    // validation for empty input
    if (obj.value.trim() === "") {
      options.msg = "This field is required";
      renderErrorEl(options);
      return;
    }

    // input valid lets make a todo
    options.isError = false;
    options.msg = "";
    renderErrorEl(options);
    obj.isValid = true;
  });

  const formIsValid = Object.values(formState).every((obj) => obj.isValid);

  if (!formIsValid) {
    return;
  }

  createTodo({
    title: formState.title.value,
    description: formState.description.value,
    date: formState.date.value
  });
  formEl.reset();
}

function renderErrorEl({ inputEl, errEl, msg, isError }) {
  if (!isError) {
    errEl.classList.add(CLASS_LISTS.ERROR.HIDE);
    errEl.classList.remove(CLASS_LISTS.ERROR.SHOW);
    inputEl.classList.add(CLASS_LISTS.INPUT.VALID);
    inputEl.classList.remove(CLASS_LISTS.INPUT.INVALID);
    return;
  }

  errEl.textContent = msg;
  errEl.classList.remove(CLASS_LISTS.ERROR.HIDE);
  errEl.classList.add(CLASS_LISTS.ERROR.SHOW);
  inputEl.classList.add(CLASS_LISTS.INPUT.INVALID);
  inputEl.classList.remove(CLASS_LISTS.INPUT.VALID);
}

function createTodo({ title, description, date }) {
  const todo = {
    id: makeUUID(),
    title,
    description,
    date
  };
  state.todos.push(todo);
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(state.todos));

  renderTodo(todo);
}

function renderTodo(todo) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo-item");
  // add data-todo-id attribute to the todo element
  todoEl.setAttribute("data-todo-id", todo.id);
  todoEl.innerHTML = /*html*/ `
      <div class="todo-item-content">
        <h2>${todo.title}</h2>
        <p>${todo.description}</p>
        <p>${todo.date}</p>
      </div>
      <button class="delete-todo">🗑️</button>
      <!-- <button class="delete-todo" onclick="removeTodo('${todo.id}')">Delete</button> -->
  `;
  const deleteButton = todoEl.querySelector(".delete-todo");
  deleteButton.addEventListener("click", () => removeTodo(todo.id));
  todoContainer.appendChild(todoEl);
}

export function removeTodo(id) {
  const todoEl = document.querySelector(`[data-todo-id="${id}"]`);
  todoEl.remove();
  state.todos = state.todos.filter((todo) => todo.id !== id);
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(state.todos));
}

function makeUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

init();
