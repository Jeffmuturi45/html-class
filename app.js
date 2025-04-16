const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/mixes", (req, res) => {
  res.render("mixes");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Start server
app.listen(port, () => {
  console.log(`Portfolio site is live at http://localhost:${port}`);
});
