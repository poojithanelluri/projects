document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('dueDate');
    const priorityInput = document.getElementById('priority');
    const addTaskButton = document.getElementById('addTask');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('list-group-item');
            taskItem.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <input type="checkbox" class="form-check-input">
                        <label>${taskText}</label>
                    </div>
                    <div>
                        <span class="badge bg-primary">${dueDate}</span>
                        <span class="badge bg-secondary">${priority}</span>
                        <button class="btn btn-danger btn-sm delete-task">Delete</button>
                    </div>
                </div>
            `;
            taskList.appendChild(taskItem);

            // Clear input fields
            taskInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'high';

            // Add event listener to delete task
            const deleteButton = taskItem.querySelector('.delete-task');
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });
        }
    });
});
