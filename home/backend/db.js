const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "buyme",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_POOL_SIZE || 10),
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("Database Error:", err.message);
    return;
  }
  console.log("MySQL Connected");
  connection.release();
});

module.exports = db;
