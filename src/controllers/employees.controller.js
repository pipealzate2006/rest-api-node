import { pool } from "./../db.js";

export const getEmployees = async (req, res) => {
  const result = await pool.query("SELECT * FROM employees");
  res.json(result)
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const result = await pool.query(
    "INSERT INTO employees (name, salary) VALUES (?, ?)",
    [name, salary]
  );
  res.send({
    id: result.insertId.toString(),
    name,
    salary,
  });
};

export const updateEmployees = (req, res) => {
  res.send("Updating employees");
};

export const deleteEmployees = (req, res) => {
  res.send("Deleting employees");
};
