const Employee = require('./models/employee');

const resolvers = {

  Query: {
    employees: () => {
      console.log(123)
      return Employee.find({})
    },
  },

  Mutation: {
    addEmployee: (user, data) => {
      const newEmployee = new Employee({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        primaryLanguage: data.primaryLanguage,
        languages: data.languages,
      });
      return newEmployee.save();
    },
    updateEmployee: (user, {
      _id,
      firstName,
      lastName,
      dateOfBirth,
      primaryLanguage,
      languages,
    }) => Employee.findByIdAndUpdate({ _id }, {
      firstName,
      lastName,
      dateOfBirth,
      primaryLanguage,
      languages,
    }, { lean: true, useFindAndModify: false }),
    deleteEmployee: (user, _id) => Employee.find({ _id }).remove(),
  },
};

module.exports = resolvers;
