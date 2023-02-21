const taskInput = document.getElementById('dashboard-box-content-tasks');
const dashboardBoxTasks = document.querySelector('.dashboard-box-tasks');

taskInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
    const taskText = taskInput.value.trim();

    if (taskText) {
    const newTask = document.createElement('div');
        newTask.textContent = taskText;
        newTask.classList.add( 'task-item');
        dashboardBoxTasks.appendChild(newTask)
        taskInput.value = "";
    }
    }
});
