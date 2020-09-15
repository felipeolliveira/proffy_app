import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json({ msg: "users" });
});

app.listen(3333);
