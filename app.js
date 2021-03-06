const express = require("express");
const path = require("path");
const urlLinks = require("./urlLinks.json");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//root directory
app.use(express.static(`${__dirname}`));
//public files directory
app.use(express.static(`${__dirname}/public`));

app.get("/", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/index.ejs")}`, { urlLinks });
});

//route to the HOME page
app.get("/home", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/index.ejs")}`, { urlLinks });
});

//route to the RESOURCES page
app.get("/resources", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/resources.ejs")}`, { urlLinks });
});

//route to the SUPPORT page
app.get("/inspiration", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/inspiration")}`, { urlLinks });
});

app.get("/tools", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/tools")}`, { urlLinks });
});

app.get("/search", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/search")}`, { urlLinks });
});
