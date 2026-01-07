const express = require("express");
const bodyparser = require("body-parser");
const Attendance = require("./models/attendance.model");
const Employee = require("./models/employee.model");
const sequelize = require("./db");
const app = express();
app.use(express.json());

Employee.hasMany(Attendance, { foreignKey: "employee_id" });
Attendance.belongsTo(Employee, { foreignKey: "employee_id" });

sequelize.sync();
//register
app.post("/register", async (req, res) => {
  const { name, email } = req.body;
  if (!name) {
    res.json({ message: "name is required" });
  }
  const employee = await Employee.create({ name, email });
  res.json(employee);
});

app.get("/employees", async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});
app.get("/employee/:id", async (req, res) => {
  const employee = await Employee.findByPk(req.params.id, {
    include: Attendance,
  });
  if (!employee) {
    res.json({ message: "employee not found" });
  }
  res.json(employee);
});

app.put("/employee/:id", async (req, res) => {
  const { name, email } = req.body;
  const employee = await Employee.update(
    { name, email },
    {
      where: { id: req.params.id },
    }
  );
  if (!employee) {
    res.json({ message: "user not found" });
  }
  res.json({ message: "user updated" });
});

app.delete("/employee/:id", async (req, res) => {
  const employee = await Employee.destroy({
    where: { id: req.params.id },
  });

  if (!employee) {
    res.json({ message: "employee not found" });
  }
  res.json({ message: "employee delete" });
});

app.listen(600, () => {
  console.log("server run on port 600");
});
