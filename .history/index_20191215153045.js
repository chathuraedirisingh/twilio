const express = require("express");
const app = express();
app.use(express.json());

const client = require("twilio")(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

//READ Request Handlers
app.get("/", (req, res) => {
  res.send("Welcome to Edurekas REST API with Node.js Tutorial!!");
});

//CREATE Request Handler
app.post("/api/send", (req, res) => {
  res.header('Content-Type','application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
