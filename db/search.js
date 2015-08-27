var Vendor = require("../db/connection").models.Vendor;
var Market = require("../db/connection").models.Market;

module.exports = {
  vendorSearch: function(req, res){
    var userVendorSearch = req
    Vendor.findAll({ where: {name: userVendorSearch} }).then(function(vendorResults){
      for(i = 0; i < vendorResults.length; i++){
      console.log(vendorResults[i].id)
      }
    })
  },

  marketSearch: function(req, res){
    var userMarketSearch = req
    Market.findAll({ where: {name: userMarketSearch}}).then(function(marketResults){
      for(i = 0; i < marketResults.length; i++){
          console.log(marketResults[i].id)
      }
    })
  }
}