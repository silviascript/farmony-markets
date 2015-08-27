// Require express to application.
// Connect express to application.
// Connect path middleware.
var express = require("express");
var app = express();
var path = require("path");

// Module to connect to the database specified in your DATABASE_URL.
var pg = require('pg');

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
})

// Connect bodyparser middleware.
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Connect Controllers
var vendorsController = require("./controllers/vendors.js");
var marketsController = require("./controllers/markets.js");


// Connect search engine
var search = require("./db/search.js")

app.use("/public", express.static(path.join(__dirname + "/public")));
app.use(express.static('public'));
// app.use(express.static('files'));
// app.use('/static', express.static('public'));

// Set up the HBS.
app.set("view engine", "hbs");
var Vendor = require("./db/connection").models.Vendor;
var Market = require("./db/connection").models.Market;

app.use("/", vendorsController);
app.use("/", marketsController);

// Connect to the Farmers Market API.
// var apiRouter = require("./public/js/market_api.js")

// Connect to the browser.
app.get("/", function(req, res){
  res.redirect("markets")
});

// name: {$iLike: '%' + userMarketSearch + '%'}
app.get("/search", function(req, res) {
    var userMarketSearch = req.query.q

    Market.findAll({
        where: {
            $or: [{
                name: {
                    // $like: 'Adams Morgan Farmers Market'
                    $iLike: '%' + userMarketSearch + '%'
                }
            }, {
                products: {
                    // $like: 'Adams Morgan Farmers Market'
                    // $contains: ['Eggs']
                    $iLike: '%' + userMarketSearch + '%'
                }
            }]
        }

    }).then(function(searchResults) {
        console.log(searchResults)
        if (searchResults == false) {
            Market.findAll({
                where: {
                    addressZip: userMarketSearch
                }
            }).then(function(searchResults) {
                res.render("markets/search", {
                    markets: searchResults
                })
            })
        } else
            res.render("markets/search", {
                markets: searchResults
            })
    })

})

// Create route for about.
app.get('/about', function(req, res) {
    res.render('about', {
        title: 'About'
    });
});

// Create route for contact.
app.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'Contact'
    });
});

// Port listener.
app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function() {
    console.log("Listening on port 3000.");
});
