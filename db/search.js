var Vendor = require("../db/connection").models.Vendor;
var Market = require("../db/connection").models.Market;

module.exports = {
    marketSearch: function(req, res){
        var userSearch = req
        console.log("working: " + Vendor)
        Vendor.find({name: userSearch['name']}, function(err, doc) {
            if(!err && doc) {
                res.json(200, doc);
            } else if(err) {
                res.json(500, { message: "Error loading Market." + err});
            } else {
                res.json(404, { message: "Market not found."});
            }
        });
    }
}
