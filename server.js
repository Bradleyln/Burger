
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

//Serve static content for the app from the "public" directory in the application directory
//app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false

}));

//override with POST having ?_method = DELTE
app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');


var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});