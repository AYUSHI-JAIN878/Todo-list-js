// Initial Todo List
let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '2025-10-02'
    },
    {
        item: 'Go to College',
        dueDate: '2025-10-02'
    }
];

// Display the initial list
displayItems();

// Function to Add Todo
function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    if (todoItem === "" || todoDate === "") {
        alert("Please enter both Todo and Date!");
        return;
    }

    todoList.push({ item: todoItem, dueDate: todoDate });

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

// Function to Display Todos
function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];

        newHTML += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
        `;
    }

    containerElement.innerHTML = newHTML;
}

// Function to Delete Todo
function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItems();
}
