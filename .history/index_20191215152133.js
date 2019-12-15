const express = require("express");
const app = express();
app.use(express.json());

//READ Request Handlers
app.get("/", (req, res) => {
  res.send("Welcome to Edurekas REST API with Node.js Tutorial!!");
});

//CREATE Request Handler
app.post("/api/send", (req, res) => {
  const data = req.body;
  res.send(data);
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
