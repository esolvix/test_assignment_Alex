const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  primaryLanguage: String,
  languages: String,
});

const Employee = model('employee', employeeSchema);

module.exports = Employee;
