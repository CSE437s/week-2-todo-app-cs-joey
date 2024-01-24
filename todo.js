let todoID = 0;
let textContent = "sample content";

function newTodo(){
    let newDiv = document.createElement('div');
    newDiv.id = todoID; 
    todoID++;
    newDiv.className = 'item';
    newDiv.innerHTML = textContent;
    document.body.appendChild(newDiv);
}

document.getElementById(add).addEventListener("click", newTodo);