import { createPool } from "mariadb";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "companydb",
  port: 3306,
  connectionLimit: 10,
});
