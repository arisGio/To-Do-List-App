// create an folder for all the javascript that you are going to use
// create a Task class in order to properly create & collect all the properties & methods that characterize a task
// handle events when user uses the Interface

// SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EVENT LISTENERS

todoButton.addEventListener('click', addTodo);

// FUNCTIONS

function addTodo(event) {
    event.preventDefault(); 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
}