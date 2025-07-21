const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  employeeId: String,
  description: String,
  completed: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);

