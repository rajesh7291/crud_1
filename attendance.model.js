const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Attendance = sequelize.define("Attendance", {
  date_time: {
    type: DataTypes.DATE,
  },
});
module.exports = Attendance;
