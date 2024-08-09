import { pool } from "./../db.js";

export const getEmployees = async (req, res) => {
  const result = await pool.query("SELECT * FROM employees");
  res.json(result);
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM employees WHERE id = ?", [id]);
  if (result.length <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });
  res.json(result);
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

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  const result = await pool.query(
    "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
    [name, salary, id]
  );
  if (result.affectedRows <= 0)
    return res.status(404).json({ message: "Employee not found to update" });
  res.json({
    id,
    name,
    salary,
  });
};

export const deleteEmployees = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM employees WHERE id = ?", [id]);
  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });
  res.sendStatus(204);
};
