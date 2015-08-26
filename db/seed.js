// Require the connection JavaScript file.
var farmonyDatabase = require("./connection");

// Require the connection to data files.
var data = {
  markets: require("./market"),
  vendors: require("./vendor"),
  // booths: require("./booth")
}

var booths = [
  { "marketId": "1", "vendorId": "1" },
  { "marketId": "1", "vendorId": "2" },
  { "marketId": "1", "vendorId": "3" },
  { "marketId": "1", "vendorId": "4" },
  { "marketId": "1", "vendorId": "5" },
  { "marketId": "2", "vendorId": "3" },
  { "marketId": "2", "vendorId": "4" },
  { "marketId": "3", "vendorId": "1" },
  { "marketId": "3", "vendorId": "6" },
  { "marketId": "3", "vendorId": "7" },
  { "marketId": "4", "vendorId": "3" },
  { "marketId": "4", "vendorId": "8" },
  { "marketId": "4", "vendorId": "9" },
  { "marketId": "5", "vendorId": "7" },
  { "marketId": "5", "vendorId": "10" },
  { "marketId": "5", "vendorId": "11" },
  { "marketId": "6", "vendorId": "12" },
  { "marketId": "6", "vendorId": "13" },
  { "marketId": "6", "vendorId": "14" },
  { "marketId": "6", "vendorId": "3" },
  { "marketId": "7", "vendorId": "5" },
  { "marketId": "7", "vendorId": "3" },
  { "marketId": "8", "vendorId": "4" },
  { "marketId": "8", "vendorId": "1" }
];

// User.bulkCreate(users).then(function(){
//   Stock.bulkCreate(stocks);
//   return Ownership.bulkCreate(ownerships);
// });

farmonyDatabase.models.Market.bulkCreate(data.markets).then(function(){
  farmonyDatabase.models.Vendor.bulkCreate(data.vendors);
  // return farmonyDatabase.models.booth.bulkCreate(booths)
})



// .then(function(){
//   process.exit();
// });
//
// farmonyDatabase.models.Vendor.bulkCreate(data.vendors).then(function(){
//   return farmonyDatabase.models.Vendor.findAll();
// })
// .then(function(){
//   process.exit();
// });
//
// farmonyDatabase.models.Booth.bulkCreate(data.booths).then(function(){
//   return farmonyDatabase.models.Booth.findAll();
// }).
// then(function(){
//   process.exit();
// })
// .then(function(markets){
//   var m, market, v, vendor, vendors, output = [];
//   for (m = 0; m < markets.length; m++){
//     market = markets[m];
//     vendors = data.vendors[market.name];
//     for(v = 0; v < vendors.length; v++){
//       vendor = vendors[v];
//       vendor.marketId = market.id;
//       output.push(vendor);
//     }
//   }
//   return farmonyDatabase.models.Vendor.bulkCreate(output);
// })
