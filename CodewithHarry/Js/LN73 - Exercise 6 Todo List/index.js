let todoBox = document.getElementById("todoBox");
let addNewTodo = document.getElementById("addNewTodo");
let showAllTodo = document.getElementById("showAllTodo");
let todoValueInput = document.getElementById("todoValue");

// Retrieve the todo list from local storage or initialize it as an empty array
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Add new todos
function addTodo() {
  // Get the value of todo from the input fields
  let todoValue = todoValueInput.value.trim();

  if (todoValue) {
    // Add the new todo to the array
    todos.push(todoValue);

    // store the updated array in local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // reset the input fields
    todoValueInput.value = "";

    // Update the UI by displaying the todos
    if(todos.length === 1)
    {
      todoBox.innerHTML = ""
    }
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
        <span>${todoValue}</span>
        <button type="button" class="btn-close" arial-label="Close"></button>
        `;
    todoBox.appendChild(listItem);
  }
}

// Add new todos when enter key is pressed
todoValueInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Add new todos when "Add" button is clicked
addNewTodo.addEventListener("click", function (event) {
  // Prevent the default form submission
  event.preventDefault();
  addTodo();
});

// Show all todos
showAllTodo.addEventListener("click", function (event) {
  displayTodos();
});

// Delete Last todo
todoBox.addEventListener("click", function (event) {
  // event.target = refers to the element that triggered the event, which is the close button in this case.
  // event.target.parentElement  = refers to the parent element of the close button which is list
  // Array.from(todoBox.children).indexOf(listItem) + 1 =  This line calculates the key (index) of the clicked todo item within the list. It first converts the todBox's children (the list of todo items) into an array using Array.from. Then, it finds the index of the listItem within the array, and finally, it adds 1 to the index since your code appears to use 1-based numbering.

  if (event.target && event.target.classList.contains("btn-close")) {
    const listItem = event.target.parentElement;
    const index = Array.from(todoBox.children).indexOf(listItem);

    // Remove the todo from the array
    todos.splice(index, 1);

    // Update local storage with the modified array
    localStorage.setItem("todos", JSON.stringify(todos));

    // Update the UI by displaying the updated todos
    displayTodos();
  }
});

// forEach(item,position)
// The first variable in the parentheses will receive the current item from the array, and the second variable will receive the index of that item.

// Function to display todos on the UI
function displayTodos() {
  // clear the UI
  todoBox.innerHTML = "";

  if (todos.length === 0) {
    todoBox.innerHTML = "<li class='todo-item' >No todos</li>";
  } else {
    todos.forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.className = "todo-item";
      listItem.innerHTML = `
      <span>${todo}</span>
      <button type="button" class="btn-close" arial-label="Close"></button>
      `;
      todoBox.appendChild(listItem);
    });
  }
}

// displayTodos();
