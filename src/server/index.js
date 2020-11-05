var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");

var json = {
  title: "test json response",
  message: "this is a message",
  time: "now",
};
const application_key = process.env.API_KEY;
var options = {
  method: "POST",
  hostname: "http://api.meaningcloud.com",
  path: `/sentiment-2.1?key=${application_key}&lang=en&of=json&txt=`,
  headers: {},
  maxRedirects: 20,
};

async function callAPI(fullPath) {
  console.log(fullPath);
  const response = await fetch(fullPath, {
    method: "POST",
  });
  try {
    const newData = await response.text();
    console.log(newData);
    //Client.checkForName(data);
  } catch (error) {
    console.log(error);
  }
}
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

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

app.post("/submit", function (req, res) {
  console.log("Submitted");
  console.log("Body", req.body.text);
  const txt = encodeURIComponent(req.body.text);
  const fullPath = `${options.hostname}${options.path}${txt}`;
  console.log(fullPath);
  newData = callAPI(fullPath);
  res.send("submitted");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
