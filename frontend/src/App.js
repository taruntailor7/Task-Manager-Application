import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import TaskBoard from './components/tasks/TaskBoard';
import TaskDetails from './components/tasks/TaskDetails';
// import EditTask from './components/tasks/EditTask';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tasks" element={<TaskBoard />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
      {/* <Route path="/tasks/:id/edit" element={<EditTask />} /> */}
      <Route path="/" element={<TaskBoard />} />
    </Routes>
  );
};

export default App;