const express = require("express");
const cors = require("cors");
const path = require("path");
const { exec } = require("child_process");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const db = require("./db");
const productsData = require("./data/products");

const app = express();

app.use(cors());
app.use(express.json());

const staticRoot = path.resolve(__dirname, "..", "..");
app.use(express.static(staticRoot));

db.query(
  `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) {
      console.error("Failed to ensure users table:", err.message);
    }
  }
);

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.post("/api/auth/signup", (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim().toLowerCase();
  const phone = String(req.body?.phone || "").trim() || null;
  const password = String(req.body?.password || "");

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.query(
    "SELECT id FROM users WHERE email = ?",
    [email],
    (checkErr, rows) => {
      if (checkErr) {
        return res.status(500).json({ message: "Database error" });
      }
      if (rows && rows.length) {
        return res.status(409).json({ message: "Account already exists" });
      }

      const passwordHash = bcrypt.hashSync(password, 10);
      db.query(
        "INSERT INTO users (name, email, phone, password_hash) VALUES (?, ?, ?, ?)",
        [name, email, phone, passwordHash],
        (insertErr, result) => {
          if (insertErr) {
            return res.status(500).json({ message: "Database error" });
          }
          res.json({
            id: result.insertId,
            name,
            email,
            phone
          });
        }
      );
    }
  );
});

app.post("/api/auth/login", (req, res) => {
  const identifier = String(req.body?.identifier || "").trim();
  const password = String(req.body?.password || "");
  if (!identifier || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }
  const identifierLower = identifier.toLowerCase();
  db.query(
    "SELECT * FROM users WHERE email = ? OR LOWER(name) = ? LIMIT 1",
    [identifierLower, identifierLower],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }
      const user = rows && rows[0];
      if (!user) {
        return res.status(401).json({ message: "Account not found" });
      }
      const ok = bcrypt.compareSync(password, user.password_hash);
      if (!ok) {
        return res.status(401).json({ message: "Invalid password" });
      }
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      });
    }
  );
});

app.get("/", (req, res) => {
  res.sendFile(path.join(staticRoot, "index.html"));
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/db-health", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "DB not reachable" });
    }
    res.json({ status: "ok" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  if (String(process.env.OPEN_BROWSER || "true").toLowerCase() !== "false") {
    exec(`start http://localhost:${PORT}/`);
  }
});
