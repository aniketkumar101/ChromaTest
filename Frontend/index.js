const express = require("express");
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from src/ and resources/
app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/resources", express.static(path.join(__dirname, "resources")));

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
