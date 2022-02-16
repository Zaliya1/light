const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const headerButton = document.querySelector('.header-button');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');



const toDoData = JSON.parse(localStorage.getItem('toDoItems')) || [];
const local = function() {
    console.log(toDoData);
    for (let i =0; i< toDoData.length; i++) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + toDoData[i].text + '</span>'+
        '<div class="todo-buttons">' + 
		'<button class="todo-remove"></button>' + 
		'<button class="todo-complete"></button>' + 
		'</div>';
        if (toDoData[i].completed) {
            todoCompleted.append(li);
        } else if (!toDoData[i].completed) {
            todoList.append(li);
        }
    }
};
if (localStorage.getItem('toDoItems')) {
    local();
}
const render = function () {
    localStorage.setItem('toDoItems', JSON.stringify(toDoData));
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
    });
    
    // li.querySelector('.todo-remove').addEventListener('click', function(){
    //     console.log('.todo-remove');
    //     delete toDoData[index];
    //     render();
    // });
    
};
const liComplete = document.querySelectorAll('li > .todo-buttons > .todo-complete');
const liDelete = document.querySelectorAll('li > .todo-buttons > .todo-remove');
    for (let i =0; i< liComplete.length; i++) {
        liComplete[i].addEventListener('click', function(){
            console.log('.todo-complete');
            console.log(toDoData);
            
            toDoData[i].completed = !toDoData[i].completed;
            render();
        });
    }

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value.trim() !== "") {
        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        // localStorage.setItem('toDoItems', JSON.stringify(toDoData));
        render();
        headerInput.value ="";
    }
    console.log('submit');
});
