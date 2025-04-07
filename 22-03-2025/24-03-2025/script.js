document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    saveTask(taskText);
    taskInput.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
    updateLocalStorage();
}

function removeTask(button) {
    let taskItem = button.parentElement;
    taskItem.remove();
    updateLocalStorage();
}

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span onclick="toggleTask(this)" class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="delete-btn" onclick="removeTask(this)">❌</button>
        `;
        taskList.appendChild(li);
    });
}

function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({ text: li.textContent.replace("❌", "").trim(), completed: li.firstChild.classList.contains("completed") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
