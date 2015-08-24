// Require the connection JavaScript file.
var FarmonyDatabase = require("./connection");

// Require the connection to data files.
var data = {
  markets: require("./market_data"),
  vendors: require("./vendor_data")
}