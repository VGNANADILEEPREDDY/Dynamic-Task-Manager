import React from "react";
import Task from "Task";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;