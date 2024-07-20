import { GET_TASKS, GET_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/types';

const initialState = {
  tasks: [],
  task: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        )
      };
    default:
      return state;
  }
}
