const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Employee = sequelize.define("Employeee", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = Employee;
