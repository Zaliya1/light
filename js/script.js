const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const headerButton = document.querySelector('.header-button');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let toDoData = [];
const local = function() {
    toDoData = JSON.parse(localStorage.getItem('key'));
    for (let i =0; i< toDoData.length; i++) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + toDoData[i].text + '</span>'+
        '<div class="todo-buttons">' + 
		'<button class="todo-remove"></button>' + 
		'<button class="todo-complete"></button>' + 
		'</div>';
        todoList.append(li);
    }
};
if (localStorage.getItem('key')) {
    local();
}
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
        let items = document.querySelectorAll('.todo-item'); // почему items is not a function?
        console.log(items);

        li.querySelector('.todo-complete').addEventListener('click', function(){
            console.log('.todo-complete');
            item.completed = !item.completed;
            render();
        });
        li.querySelector('.todo-remove').addEventListener('click', function(){
            console.log('.todo-remove');
            delete toDoData[index];
            render();
        });

    });
    
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value.trim() !== "") {
        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        localStorage.setItem('key', JSON.stringify(toDoData));
        render();
        headerInput.value ="";
    }
    console.log('submit');
});
