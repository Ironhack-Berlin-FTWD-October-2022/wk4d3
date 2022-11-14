const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) => res.render("index"));

app.get("/areas", (req, res, next) => {
  const areas = [
    {
      id: 1,
      name: "Neukoelln",
      photo:
        "https://media.istockphoto.com/id/613769264/de/foto/alltag-in-berlin-mit-radfahrern-und-fu%C3%9Fg%C3%A4ngern-die-sich-bewegen.jpg?s=612x612&w=0&k=20&c=m7KKbM8TIyNKZAOqlkDZu-zUmR3YHVlKEyFTbxj8RLo=",
    },
    {
      id: 2,
      name: "Prenzlauer Berg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kastanienallee%2C_U-Bhf_Eberswalder_Str%2C_Konnopke.jpg",
    },
    {
      id: 3,
      name: "Friedrichshain",
      photo:
        "https://velvetescape.com/wp-content/uploads/2015/06/IMG_4081-1280x920.jpeg",
    },
    {
      id: 4,
      name: "Kreuzberg",
      photo:
        "https://m.faz.net/media0/ppmedia/aktuell/3504425696/1.8387968/mmobject-still_full/es-wird-teuer-die-neue.jpg",
    },
  ];
  res.render("areas", { areas });
});

// app.get("/venues", (req, res, next) => res.render("venues"));

app.listen(3000, () => console.log("listening on port 3000"));

app.get("/venues", (req, res, next) => {
  // ADD THIS:
  const venues = [
    {
      id: 1,
      name: "Loophole",
      address: "Boddinstraße 60, 12053 Berlin",
      area: "Neukoelln",
      photo:
        "https://groove.de/wp-content/uploads/2022/06/CF82700A-3EE1-44BC-9E82-DAEAB83F909B_1_105_c.jpeg",
    },
    {
      id: 2,
      name: "Schockoladen",
      address: "Ackerstraße 169, 10115 Berlin",
      area: "Prenzlauer Berg",
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-s/03/5b/91/79/schokoladen.jpg",
    },
    {
      id: 3,
      name: "8mm",
      address: "Schönhauser Allee 177b, 10119 Berlin",
      area: "Prenzlauer Berg",
      photo:
        "https://www.exberliner.com/wp-content/uploads/2022/08/8mm_20220513_2-1-scaled.jpg",
    },
    {
      id: 4,
      name: "Madame Claude",
      address: "Lübbener Str. 19, 10997 Berlin",
      area: "Kreuzberg",
      photo:
        "https://www.berlin.de/binaries/adressen/71128/source/1355765612/624x468/",
    },
  ];

  res.render("venues", { venues });
});
