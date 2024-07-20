import axios from 'axios';
import { GET_TASKS, GET_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK, GET_ERRORS } from './types';

// Get Tasks
export const getTasks = () => dispatch => {
  axios
    .get('/api/tasks')
    .then(res =>
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Task
export const getTask = id => dispatch => {
  axios
    .get(`/api/tasks/${id}`)
    .then(res =>
      dispatch({
        type: GET_TASK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Task
export const addTask = taskData => dispatch => {
  axios
    .post('/api/tasks', taskData)
    .then(res =>
      dispatch({
        type: ADD_TASK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Task
export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/tasks/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Update Task
export const updateTask = (id, taskData) => dispatch => {
  axios
    .put(`/api/tasks/${id}`, taskData)
    .then(res =>
      dispatch({
        type: UPDATE_TASK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
