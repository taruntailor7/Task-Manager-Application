import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/actions/taskActions';
import TaskItem from './TaskItem';

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div>
      <h2>Task Board</h2>
      <div>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
