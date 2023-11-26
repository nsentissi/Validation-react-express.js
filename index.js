const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/tasks", (req, res) => {
  const {
    title,
    description,
    task_priority,
    task_status,
  } = req.body;

  pool
    .query(
      "INSERT INTO tasks (title, description,task_priority, task_status) VALUES ($1, $2, $3, $4) RETURNING *;",
      [title, description, task_priority, task_status]
    )
    .then((data) => res.json(data.rows[0]))
    .catch((e) => res.send(e.message));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
