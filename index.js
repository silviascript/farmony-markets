// Require Express
var express = require("express");

// Connect Express to application.
var app = Express();

// Port Listener
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});
