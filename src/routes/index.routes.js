import { Router } from "express";
import { ping } from "../controllers/index.controller.js";
export const indexRouter = Router();

indexRouter.get("/ping", ping);
