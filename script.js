let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        let criarElement = document.createElement('li')
        listElement.appendChild(criarElement);
        criarElement.innerHTML = todo;

        let linkElement = document.createElement('a');
        criarElement.appendChild(linkElement);

        let textElement = document.createTextNode(' Exluir');
        linkElement.appendChild(textElement);
        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    }
}

function addTodo(){
    let textTodo = inputElement.value;
    todos.push(textTodo);
    renderTodos();
    saveStorage();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todo', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

renderTodos();
