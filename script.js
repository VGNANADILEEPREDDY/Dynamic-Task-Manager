// Get elements
const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');

const filterAllBtn = document.getElementById('filter-all');
const filterCompletedBtn = document.getElementById('filter-completed');
const filterIncompleteBtn = document.getElementById('filter-incomplete');

let tasks = []; // Store tasks here
let filter = 'all'; // Task filter: 'all', 'completed', 'incomplete'

// Add new task
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        title: taskTitle.value,
        description: taskDesc.value,
        completed: false,
    };
    tasks.push(newTask);
    taskTitle.value = ''; // Clear the input fields
    taskDesc.value = '';
    renderTasks();
});

// Toggle task completion
function toggleTaskCompletion(id) {
    tasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}

// Filter tasks by status
filterAllBtn.addEventListener('click', () => {
    filter = 'all';
    renderTasks();
});

filterCompletedBtn.addEventListener('click', () => {
    filter = 'completed';
    renderTasks();
});

filterIncompleteBtn.addEventListener('click', () => {
    filter = 'incomplete';
    renderTasks();
});

// Render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list before rendering
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true; // 'all' filter
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<p>No tasks available.</p>';
        return;
    }

    filteredTasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <div>
                <button onclick="toggleTaskCompletion('${task.id}')">
                    ${task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button onclick="deleteTask('${task.id}')">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}