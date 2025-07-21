const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.get('/employee/:employeeId', async (req, res) => {
  const tasks = await Task.find({ employeeId: req.params.employeeId });
  res.json(tasks);
});

router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;

