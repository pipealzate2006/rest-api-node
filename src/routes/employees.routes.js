import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "./../controllers/employees.controller.js";

export const employeesRouter = Router();

employeesRouter.get("/employees", getEmployees);

employeesRouter.post("/employees", createEmployees);

employeesRouter.patch("/employees", updateEmployees);

employeesRouter.delete("/employees", deleteEmployees);
