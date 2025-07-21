const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);
