const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) => res.render("index"));

app.get("/areas", (req, res, next) => res.render("areas"));

// app.get("/venues", (req, res, next) => res.render("venues"));

app.listen(3000, () => console.log("listening on port 3000"));

// setting layout to false

// app.get("/teams", (req, res, next) => {
//   const data = {
//     layout: false,
//   };
//   res.render("teams", data);
// });

// array of info to be iterated over in card partial

app.get("/venues", (req, res, next) => {
  // ADD THIS:
  const venues = [
    {
      name: "Loophole",
      address: "Boddinstraße 60, 12053 Berlin",
      area: "Neukoelln",
      photo:
        "https://groove.de/wp-content/uploads/2022/06/CF82700A-3EE1-44BC-9E82-DAEAB83F909B_1_105_c.jpeg",
    },
    {
      name: "Schockoladen",
      address: "Ackerstraße 169, 10115 Berlin",
      area: "Prenzlauer Berg",
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-s/03/5b/91/79/schokoladen.jpg",
    },
    {
      name: "8mm",
      address: "Schönhauser Allee 177b, 10119 Berlin",
      area: "Prenzlauer Berg",
      photo:
        "https://www.exberliner.com/wp-content/uploads/2022/08/8mm_20220513_2-1-scaled.jpg",
    },
    {
      name: "Madame Claude",
      address: "Lübbener Str. 19, 10997 Berlin",
      area: "Kreuzberg",
      photo:
        "https://www.berlin.de/binaries/adressen/71128/source/1355765612/624x468/",
    },
  ];

  res.render("venues", { venues });
});
