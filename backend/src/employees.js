const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Task = require('../models/Task');
const { sendWelcomeEmail } = require('../mailer');

router.post('/', async (req, res) => {
  const employee = await Employee.create(req.body);
  await sendWelcomeEmail(employee.email, employee.name);
  res.json(employee);
});

router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  await Task.deleteMany({ employeeId: req.params.id });
  res.json({ message: 'Employee and tasks deleted' });
});

module.exports = router;
