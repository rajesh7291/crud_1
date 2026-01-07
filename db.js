const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("attendance_db", "root", "Rajesh@7291", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("mysql connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = sequelize;
