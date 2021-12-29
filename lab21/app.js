const list = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);


function handleClick() {
  const newTodo = this.previousElementSibling.value.trim();

  if (newTodo) {
    // add todo
   saveToStorage(newTodo);
   createTodo(newTodo);
    this.previousElementSibling.value = '';
  } else {
    alert('input field is empty ');
  }
}

function saveToStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];

  localStorage.setItem('tasks', JSON.stringify([...todos, todo]));
}

function removeFromStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];

  localStorage.setItem('tasks', JSON.stringify(todos.filter(t => t !== todo)));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('tasks'));

  if (todos) {
    todos.forEach(todo => createTodo(todo))
  }
}

function createTodo(text) {
  const li = document.createElement('li');
  li.innerText = text;
  li.className = 'todo-item';
  li.addEventListener('click', removeTodo);

  list.appendChild(li);
}

function removeTodo() {
  this.removeEventListener('click', removeTodo);
  removeFromStorage(this.textContent);
  this.remove();
}