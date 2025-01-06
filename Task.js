import React from "react";

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;