const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const headerButton = document.querySelector('.header-button');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');



const toDoData = JSON.parse(localStorage.getItem('toDoItems')) || [];

const render = function () {
    console.log(toDoData);
    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";

    toDoData.forEach(function (item, index) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>'+
        '<div class="todo-buttons">' + 
		'<button class="todo-remove"></button>' + 
		'<button class="todo-complete"></button>' + 
		'</div>';
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        li.querySelector('.todo-remove').addEventListener('click', function(){
            console.log('.todo-remove');
            delete toDoData[index];
            render();
        });
        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed;
            render();
        });
    
    });
    localStorage['toDoItems'] = JSON.stringify(toDoData);
    
};
todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value.trim() !== "") {
        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        headerInput.value ="";
        render();
    }
    console.log('submit');
});
render();