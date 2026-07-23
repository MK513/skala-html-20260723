const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("할 일을 입력하세요.");
        todoInput.focus();
        return;
    }

    addTodo(todoText);

    todoInput.value = "";

    todoInput.focus();
})

function addTodo(todoText) {
    const todoItem = document.createElement("li");
    todoItem.className = 'todo-item';

    const todoTextSpan = document.createElement("span");

    todoTextSpan.textContent = todoText;

    const actionBox = document.createElement("div");
    actionBox.className = "todo-actions";

    const doneButton = document.createElement("button");
    doneButton.type = "button";
    doneButton.className = "done-button";
    doneButton.textContent = "완료";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "삭제";
    
    doneButton.addEventListener("click", function() {
        todoItem.classList.toggle("done");
    })

    deleteButton.addEventListener("click", function () {
        todoItem.remove();
    })

    actionBox.appendChild(doneButton);
    actionBox.appendChild(deleteButton);

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(actionBox);

    todoList.appendChild(todoItem);
}