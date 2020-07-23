const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const li = document.createElement("li"),
    delBtn = document.createElement("button");

function paintToDo(text){
    toDoInput.value = "";
}

function toDo_handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.innertext = "x";
    const span = document.createElement("span");
    span.innerText = currentValue;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", toDo_handleSubmit);
}
init();