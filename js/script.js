const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const headerButton = document.querySelector('.header-button');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = [];
const toLocal = function (key) {
    localStorage.setItem(key, todoList.innerHTML);
};
const render = function () {
    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";
    toDoData.forEach(function (item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>'+
        '<div class="todo-buttons">' + 
		'<button class="todo-remove"></button>' + 
		'<button class="todo-complete"></button>' + 
		'</div>';
        if (item.completed) {
            todoCompleted.append(li);
            toLocal('completed');
        } else {
            todoList.append(li);
            toLocal('nocompleted');
        }
        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });
        li.querySelector('.todo-remove').addEventListener('click', function(){
            delete toDoData[toDoData.indexOf(item)];
            render();
        });
    });
    console.log(localStorage);
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value.trim() !== "") {
        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        render();
        headerInput.value ="";
    }
});
if (localStorage.getItem('nocompleted')) {
    todoList.innerHTML = localStorage.getItem('nocompleted'); 
}
if (localStorage.getItem('completed')) {
    todoCompleted.innerHTML = localStorage.getItem('completed');    
}