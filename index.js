// Require express.
// Connect express to application.
var express = require("express");
var app = express();

// Connect path middleware
var path = require("path");



// Connecting to public assets.
app.use("/public", express.static(path.join(__dirname + "/public")));

// set up hbs
app.set("view engine", "hbs");

// Port listener.
app.listen(3000, function(){
  console.log("Listening on port 3000.");
});

// Connect to browser.
app.get("/", function(req, res){
  res.send("Browser time!");
});
