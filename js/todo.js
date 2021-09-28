const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const todoBtn = document.getElementById("todo-btn");
const todoPop = document.querySelector(".todo-pop");

let todos = [];

const TODOS_KEY = "todos";
const CLASS_HIDDEN = "hidden";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(obj => obj.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("i");
    button.className = "fa fa-trash rfloat";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
                        id: Date.now(),
                        text : newTodo
                    };

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}


// todo insert
todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
} 


// todo pop toggle
todoBtn.addEventListener("click", handleToggle);

function handleToggle() {
    console.log(todoPop);
    if(todoPop.classList.contains(CLASS_HIDDEN)) {
        todoPop.classList.remove(CLASS_HIDDEN);
    } else {
        todoPop.classList.add(CLASS_HIDDEN);
    }
}