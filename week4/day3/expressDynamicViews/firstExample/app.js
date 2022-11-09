// Require Express
const express = require("");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// tell express where to look for views (in the views folder)
app.set("views", __dirname + "/views");

// tell express which 'engine' we are using!
app.set("view engine", "hbs");

// app.get("/cat", (request, response, next) => {
//   console.log(__dirname + "/views");
//   response.sendFile(__dirname + "/views/cat.html");
// });

//first route showing render method
app.get("/", (req, res, next) => res.render("index"));

app.listen(3000, () => console.log("My second app listening on port 3000!"));

//second route showing data as if from database
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Ioannis",
//     lastName: "Eifirfjrgi",
//     bootcamp: "An enemy Bootcamp",
//   };
//   res.render("hello", data);
// });
////tripple stache
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Bob",
//     bootcamp: "Ironhack",
//     test: "<h1>Trippple Stache!</h1>",
//   };
//   res.render("hello", data);
// });
// ///if/else block
// app.get("/hello", (req, res, next) => {
//   let data = {
//     name: "Bob",
//     bootcamp: "Ironhack",
//     lastName: "Simmons",
//     address: "Auerstr. 123456",
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

///Each Block
app.get("/hello", (req, res, next) => {
  let data = {
    name: "Ironhacker",
    lastName: "Rocking it!",
    address: "Your heart",
    areas: [
      "Kreuzberg",
      "Prenzlauer Berg",
      "Neukoelln",
      "Charlottenburg",
      "Friedrichshain",
      "Marzahn",
    ],
  };
  res.render("hello", data);
});
// Server Started

////Why alice and Bob?????????
