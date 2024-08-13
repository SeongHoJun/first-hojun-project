const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos 배열의 내용을 localStorage에 넣음. 이때, toDos를 string으로 변환함.
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 내가 클릭한 li.id와 다른 toDo는 지우지 않게 하고 싶다는 의미
    li.remove();
    saveToDos(); // 할 일을 삭제한 후, 변경된 toDos 배열을 localStorage에 저장
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = " 삭제 ";
    button.addEventListener("click", deleteTodo); // 슬래시(/) 제거
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); // append는 항상 맨 마지막에 !!
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
    toDoInput.value = ""; // newToDo 변수와 상관없음.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // id로 각각의 li item을 구별할 수 있음.
    };
    toDos.push(newTodoObj); // paintToDo를 하기 전에 toDos 배열에 newTodoObj를 push
    paintToDo(newTodoObj); // paintToDo 라는 새로운 function에 값을 보냄
    saveToDos(); // 변경된 toDos 배열을 localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 이전 toDo들의 값이 남아있도록 함
    parsedToDos.forEach(paintToDo); // forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행하고 있음.
}
