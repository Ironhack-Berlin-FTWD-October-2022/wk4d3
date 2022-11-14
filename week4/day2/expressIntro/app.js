// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();
// Make everything inside of public/ available
app.use(express.static("public"));

// our first Route:
app.get("/home", (request, response, next) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/views/homepage.html");
});

// cat route:
app.get("/cat", (request, response, next) =>
  response.sendFile(__dirname + "/views/catpage.html")
);

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000!"));
