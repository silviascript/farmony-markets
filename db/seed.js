// Require the connection JavaScript file.
var farmonyDatabase = require("./connection");

// Require the connection to data files.
var data = {
  markets: require("./market"),
  vendors: require("./vendor"),
};

var booths = [
  { marketId: "1", vendorId: "1" },
  { marketId: "1", vendorId: "2" },
  { marketId: "1", vendorId: "3" },
  { marketId: "1", vendorId: "4" },
  { marketId: "1", vendorId: "5" },
  { marketId: "2", vendorId: "3" },
  { marketId: "2", vendorId: "4" },
  { marketId: "3", vendorId: "1" },
  { marketId: "3", vendorId: "6" },
  { marketId: "3", vendorId: "7" },
  { marketId: "4", vendorId: "3" },
  { marketId: "4", vendorId: "8" },
  { marketId: "4", vendorId: "9" },
  { marketId: "5", vendorId: "7" },
  { marketId: "5", vendorId: "10" },
  { marketId: "5", vendorId: "11" },
  { marketId: "6", vendorId: "12" },
  { marketId: "6", vendorId: "13" },
  { marketId: "6", vendorId: "14" },
  { marketId: "6", vendorId: "3" },
  { marketId: "7", vendorId: "5" },
  { marketId: "7", vendorId: "3" },
  { marketId: "8", vendorId: "4" },
  { marketId: "8", vendorId: "1" }
];

farmonyDatabase.models.Market.bulkCreate(data.markets).then(function(){
  farmonyDatabase.models.Vendor.bulkCreate(data.vendors);
  return farmonyDatabase.models.Booth.bulkCreate(booths);
});
