const express = require("express");
const { about, portfolio } = require("./data");

const app = express();

const port = 3000;

app.use(express.static("views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    projects: portfolio.projects,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pfp: about.pfp,
    name: about.name,
    career: about.career,
    short_intro: about.intro,
    socials: about.socials,
  });
});

app.get("/unique", (req, res) => {
  res.render("unique.html");
});

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
