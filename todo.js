function getTodoList() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function addTask() {
    var task = document.getElementById('task').value;
 
    var todos = getTodoList();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    showTodoList();
 
    return false;
}
 
function removeTask() {
    var id = this.getAttribute('id');
    var todos = getTodoList();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    showTodoList();
 
    return false;
}
 
function showTodoList() {
    var todos = getTodoList();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeTask);
    };
}
 
document.getElementById('add').addEventListener('click', addTask);
show();