const firebaseConfig = {
};
firebase.initializeApp(firebaseConfig);

let todoID = 0;
let textContent = "sample content";
let addForm = document.getElementById("addForm");
let inContent = document.getElementById('inID');

function newTodo() {
    let newDiv = document.createElement('div');
    newDiv.id = todoID;
    textContent = inContent.innerText;
    todoID++;
    newDiv.className = 'item';
    newDiv.innerHTML = textContent;
    document.body.appendChild(newDiv);

    const firebaseRef = firebase.database().ref('todos/' + todoID);
    firebaseRef.set({ textContent });
}

addForm.addEventListener("click", newTodo);