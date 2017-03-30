"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;

var filtersElement = document.querySelector('.filters');


var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;





// сформируем задачки
var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'done'
    },
    {
        name: 'Купить хлеб',
        status: 'done'
    },
    {
        name: 'Захватить мир',
        status: 'todo'
    },
    {
        name: 'Добавить тудушку в список',
        status: 'todo'
    }
];



// функция по генерации элементов
function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    setTodoStatusClassName(newElement, todo.status === 'todo');
    return newElement;
}

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
}

function onListClick(event) {
    var target = event.target;
    var element;

    if (isStatusBtn(target)) {
        element = target.parentNode;
        changeTodoStatus(element);
    }

    if (isDeleteBtn(target)) {
        element = target.parentNode;
        deleteTodo(element);
    }
    renderStats();
    
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

//метод, обновляющий DOM

function renderStats()  {
    stats.done = listElement.querySelectorAll('.task_done').length;
    done.textContent = stats.done;
    stats.left = listElement.querySelectorAll('.task_todo').length;
    left.textContent = stats.left;
    total.textContent = parseInt(stats.done) + parseInt(stats.left);
}

//начальная статистика
var done = document.querySelector('.statistic__done');
var left = document.querySelector('.statistic__left');
var total = document.querySelector('.statistic__total');

var stats = {
    done: listElement.querySelectorAll('.task_done').length, 
    left: listElement.querySelectorAll('.task_todo').length
}


renderStats();

function onFilter(event) {
    var target = event.target;
    document.querySelector('.filters__item_selected').classList.remove('filters__item_selected');
    target.classList.add('filters__item_selected');
    renderStats();
    var status = target.getAttribute('data-filter');
    displayMenu(status);   
}

function displayMenu(element) {
    if (element == 'all') {
        for (var i = itemElementList.length - 1; i >= 0; i--) {
            itemElementList[i].style.display = '';
        }
    }
    if (element == 'done') {
        for (var i = 0; i < itemElementList.length; i++) {
            (itemElementList[i].classList.contains('task_done')) ? 
            itemElementList[i].style.display = '' : itemElementList[i].style.display = 'none';
        }
        
    }
    if (element == 'todo') {
        for (var i = 0; i < itemElementList.length; i++) {
            (itemElementList[i].classList.contains('task_todo')) ? 
            itemElementList[i].style.display = '' : itemElementList[i].style.display = 'none';
        }
        
    }
}


function changeTodoStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);    
}

function deleteTodo(element) {
    listElement.removeChild(element);
}



function onInputKeydown(event) {
    if (event.keyCode !== 13) {
        return;
    }

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }

    var todoName = inputElement.value.trim();

    if (todoName.length === 0 || checkIfTodoAlreadyExists(todoName)) {
        return;
    }

    var todo = createNewTodo(todoName);
    insertTodoElement(addTodoFromTemplate(todo));
    inputElement.value = '';
    renderStats();
}

function checkIfTodoAlreadyExists(todoName) {
    var todoElements = listElement.querySelectorAll('.task__name');
    var namesList = Array.prototype.map.call(todoElements, function(element) {
        return element.textContent;
    });
    return namesList.indexOf(todoName) > -1;
}

function createNewTodo(name) {
    return {
        name: name,
        status: 'todo'
    }
}

todoList
    .map(addTodoFromTemplate)
    .forEach(insertTodoElement);

listElement.addEventListener('click', onListClick);
filtersElement.addEventListener('click', onFilter);

var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

// Задача:
// исправьте багу с добавлением insertBefore в пустой массив
// создайте статистику
//
function insertTodoElement(elem) {
    if (listElement.children) {
        listElement.insertBefore(elem, listElement.firstElementChild);
    } else {
        listElement.appendChild(elem);
    }
}
