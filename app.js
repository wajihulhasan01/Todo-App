const input = document.getElementById('text');
const output = document.getElementById('todo')

function show() {
    const todoItem = document.createElement('li');
    todoItem.textContent = input.value; // Directly add text to the <li>

    const buttonDiv = document.createElement('div');
    buttonDiv.innerHTML = `
        <button onclick="edit(this)">Edit</button>
        <button onclick="del(this)">Delete</button>
    `;

    todoItem.appendChild(buttonDiv);
    output.appendChild(todoItem);
    input.value = '';
}

function edit(button) {
    const todoItem = button.parentElement.parentElement; 
    const newValue = prompt('Edit your task:', todoItem.firstChild.textContent);
    if (newValue !== null) {
        todoItem.firstChild.textContent = newValue; 
}
}
function del(button) {
    const todoItem = button.parentElement.parentElement; 
    todoItem.remove(); 
}
