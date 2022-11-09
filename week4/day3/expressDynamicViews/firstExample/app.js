// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();
// Make everything inside of public/ available
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// app.get("/cat", (request, response, next) =>
//   response.sendFile(__dirname + "/views/catpage.html")
// );

//first route showing render method
app.get("/", (req, res, next) => res.render("index"));

//second route showing data as if from database
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Rob",
//     lastName: "Eifirfjrgi",
//     bootcamp: "Ironhack",
//   };
//   res.render("hello", data);
// });
////tripple stache
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Bob",
//     bootcamp: "Ironhack",
//     test: "<span>Trippple Stache!</span>",
//   };
//   res.render("hello", data);
// });
// ///if/else block
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Bob",
//     bootcamp: "Ironhack",
//     lastName: "Schmiddty",
//   };
//   res.render("hello", data);
// });
// ///unless block
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Bob",
//     bootcamp: "Ironhack",
//     address: "123 fake street",
//   };
//   res.render("hello", data);
// });
// ///
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Bob",
//     bootcamp: "Ironhack",
//     // test: "<span>Trippple Stache!</span>",
//   };
//   res.render("hello", data);
// });
///Each Block
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Ironhacker",
//     lastName: "Rocking it!",
//     address: "Your heart",
//     areas: [
//       "Kreuzberg",
//       "Prenzlauer Berg",
//       "Neukoelln",
//       "Charlottenburg",
//       "Friedrichshain",
//       "Marzahn",
//     ],
//   };
//   res.render("hello", data);
// });
// Server Started
app.listen(3000, () => console.log("My second app listening on port 3000!"));
