const express = require('express');
const passport = require('passport');
const Task = require('../models/Task');
const { validateTaskInput } = require('../validation/task');

const router = express.Router();

// Create Task
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { errors, isValid } = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    user: req.user.id
  });

  const task = await newTask.save();
  res.json(task);
});

// Get All Tasks
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Update Task
router.put('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { errors, isValid } = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ task: 'Task not found' });
  }

  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ auth: 'User not authorized' });
  }

  task.title = req.body.title;
  task.description = req.body.description;
  task.status = req.body.status;

  await task.save();
  res.json(task);
});

// Delete Task
router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ task: 'Task not found' });
  }

  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ auth: 'User not authorized' });
  }

  await task.remove();
  res.json({ success: true });
});

module.exports = router;
