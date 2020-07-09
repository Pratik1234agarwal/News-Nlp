var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var bodyParser = require("body-parser");
var cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.API_KEY);
console.log(process.env.API_ID);

var json = {
  title: "test json response",
  message: "this is a message",
  time: "now",
};

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

console.log(JSON.stringify(mockAPIResponse));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

const aylien = require("aylien_textapi");
console.log(aylien);
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});
//Get method to get the data

// Setting Post method to get and process data
app.post("/evaluate", async function (req, res) {
  const text = req.body.value;
  textapi.sentiment(text, function (error, result) {
    if (error === null) {
      res.send(result);
    } else {
      console.log("Error Occured");
      res.send('error');
    }
  });
});


