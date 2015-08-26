var Vendor = require('../models/vendor').Vendor;
var Market = require('../models/market').Market;

module.exports = {
    marketSearch: function(req, res){
        var userSearch = req
        console.log(userSearch)

        Market.findOne({name: userSearch['name']}, function(err, doc) {
            if(!err && doc) {
                res.json(200, doc);
            } else if(err) {
                res.json(500, { message: "Error loading task." + err});
            } else {
                res.json(404, { message: "Task not found."});
            }
        });

        // return console.log("marketSearch path works")
    }
}
