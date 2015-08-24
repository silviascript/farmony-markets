// Require the connection JavaScript file.
var farmonyDatabase = require("./connection");

// Require the connection to data files.
var data = {
  markets: require("./market"),
  vendors: require("./vendor")
}