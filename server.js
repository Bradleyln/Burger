var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//override with POST having ?_method = DELTE
app.use(methodOverride('_method'));
//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});