import { pool } from "./../db.js";

export const ping = async (req, res) => {
  const result = await pool.query("SELECT '5 + 4' AS result");
  res.json(result);
};
