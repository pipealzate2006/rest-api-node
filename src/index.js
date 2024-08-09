import express from "express";
import { employeesRouter } from "./routes/employees.routes.js";
import { indexRouter } from "./routes/index.routes.js";

const app = express();
const PORT = process.env.PORT ?? 7020;

app.use(express.json());
app.use(indexRouter);
app.use(employeesRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
