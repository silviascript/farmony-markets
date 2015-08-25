// Require the connection JavaScript file.
var farmonyDatabase = require("./connection");

// Require the connection to data files.
var data = {
  markets: require("./market"),
  vendors: require("./vendor")
}

farmonyDatabase.models.Market.bulkCreate(data.markets).then(function(){
  return farmonyDatabase.models.Market.findAll();
})
.then(function(markets){
  var m, market, v, vendor, vendors, output = [];
  for (m = 0; m < markets.length; m++){
    market = markets[m];
    vendors = data.vendors[market.name];
    for(v = 0; v < vendors.length; v++){
      vendor = vendors[v];
      vendor.marketId = market.id;
      output.push(vendor);
    }
  }
  return farmonyDatabase.models.Vendor.bulkCreate(output);
})
.then(function(){
  process.exit();
});
