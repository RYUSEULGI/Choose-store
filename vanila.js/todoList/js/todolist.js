const todoForm = document.querySelector('.js-form-todo'), //const는 상수 이기 때문에 선언된 이름이 같아서는 안됨
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todoList');


const TODOS_LS = 'ToDos';

let TODOS = []; 

function delTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodo = TODOS.filter(function(ToDo){
        return ToDo.id !== parseInt(li.id);    //string을 숫자로 바꿀 수 있는 함수
    });
    TODOS = cleanTodo;
    saveTodo(TODOS);
}

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(TODOS));  //JSON.stringify 자바스크립트 객체를 문자로 바꿔줌
}

function paintTodo(text) {
    const li = document.createElement('li'); //새로운 요소 만들기
    const delBtn = document.createElement('button');
    const div = document.createElement('div');
    const newId = TODOS.length + 1; 
    delBtn.innerText = "완료";
    delBtn.addEventListener('click', delTodo);
    div.innerText = text;
    li.appendChild(div); // li의 자식요소로 span
    li.appendChild(delBtn);
    li.id = newId;             // id에 class 선택자 부여
    todoList.appendChild(li);
    const ToDoObj ={        //추가된 li 배열화 하기
        text : text,
        id : newId         //id 부여
    };
    TODOS.push(ToDoObj);
    saveTodo();
}

function handleSubmit(event) { //작성된 form enter하여 로드되면 안됨
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadToDo() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //JSON 자바스크립트에서 객체를 변환해주는 것 parse는 객체로 변환
        parsedToDos.forEach(function(ToDo){
            paintTodo(ToDo.text);
        });
    }
}

function init() {
    loadToDo();
    todoForm.addEventListener('submit', handleSubmit);
}
init();