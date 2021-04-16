const express = require("express");

const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    name: "lao han",
  });
});

app.listen("9092");
