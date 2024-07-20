import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.status}</p>
    </div>
  );
};

export default TaskItem;
