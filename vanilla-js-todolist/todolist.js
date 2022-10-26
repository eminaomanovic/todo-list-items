const AddButtonElement = document.getElementById("add-todo");
const InputElement = document.getElementById("new-todo");
const ListElement = document.getElementById("todo-list");
const StatusElement = document.getElementById("list-status");
let todoItems = [];

function init() {
	AddButtonElement.addEventListener("click", addNewItem);
}

function addNewItem() {
	const newTodoValue = InputElement.value;

	if (!newTodoValue) return;
	const newTodoItem = {
		id: Math.floor(Math.random() * 1000),
		name: newTodoValue,
		completed: false,
	};

	todoItems.push(newTodoItem);
	InputElement.value = "";

	renderList();
}

function renderList() {
	ListElement.innerHTML = "";

	todoItems.forEach((item) => {
		const ListItemElement = document.createElement("li");
		ListItemElement.id = item.id;
		ListItemElement.classList.add("list-item");

		if (item.completed) {
			ListItemElement.classList.add("completed");
		}

		ListItemElement.innerText = item.name;
		ListItemElement.onclick = toggleCompleted.bind(null, item);

		ListElement.append(ListItemElement);
	});
}

function toggleCompleted(item) {
	item.completed = !item.completed;
	const ListItemElement = document.getElementById(item.id);

	if (item.completed) {
		ListItemElement.classList.add("completed");
	} else {
		ListItemElement.classList.remove("completed");
	}
}

init();
