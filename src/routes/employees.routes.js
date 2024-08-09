import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "./../controllers/employees.controller.js";

export const employeesRouter = Router();

employeesRouter.get("/employees", getEmployees);

employeesRouter.get("/employees/:id", getEmployee);

employeesRouter.post("/employees", createEmployees);

employeesRouter.patch("/employees/:id", updateEmployees);

employeesRouter.delete("/employees/:id", deleteEmployees);
