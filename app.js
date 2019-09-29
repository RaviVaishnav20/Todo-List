const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');

//Local modules
const date = require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));

//Global Variables

let items = [];
let workItems = [];

//Home route GET method
app.get("/", function(req, res) {

currentDate = date.getDate();
  res.render("list", {
    listTitle: currentDate,
    eitems: items
  });
});

//Home route POST method
app.post("/", function(req, res) {

  let newItem = req.body.item;

  if (req.body.list === "Work") {

    workItems.push(newItem);
    res.redirect("/work");

  } else {
    items.push(newItem);
    res.redirect("/");
  }
});

//work route GET method
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    eitems: workItems
  });
});

//about route GET method
app.get("/about",function(req, res){
  res.render("about")
});

app.listen(3000, function() {
  console.log("Server is running on port 3000...");
});
