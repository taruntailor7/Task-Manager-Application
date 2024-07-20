import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTask, updateTask } from '../../redux/actions/taskActions';

const TaskDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const task = useSelector(state => state.tasks.find(task => task._id === id));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('TODO');

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const onSubmit = e => {
    e.preventDefault();
    const updatedTask = { title, description, status };
    dispatch(updateTask(id, updatedTask));
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TaskDetails;