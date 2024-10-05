function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
  
    if (todoText === '') {
      alert('Please enter a task!');
      return;
    }
  
    const todoList = document.getElementById('todo-list');
  
    
    const li = document.createElement('li');
    li.innerHTML = `${todoText} <button onclick="deleteTodo(this)">Delete</button>`;
    
  
    todoList.appendChild(li);
  
   
    todoInput.value = '';
  }
  
  function deleteTodo(button) {
    const li = button.parentElement;
    li.remove();
  }
  