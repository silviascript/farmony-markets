// Require express to application.
// Connect express to application.
// Connect path middleware.
var express = require("express");
var app = express();
var path = require("path");

// Connect bodyparser middleware.
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Connect Controllers
var vendorsController = require("./controllers/vendors.js");

// Connect search engine.
var search = require("./db/search.js")

app.use("/public", express.static(path.join(__dirname + "/public")));
app.use(express.static('public'));
// app.use(express.static('files'));
// app.use('/static', express.static('public'));

// Set up the HBS.
app.set("view engine", "hbs");

// Connect to the Farmers Market API.
// var apiRouter = require("./public/js/market_api.js")

// Using connected exports.
// Disabled until routes/views are updated.

app.use("/", vendorsController);

// Connect to the browser.
app.get("/", function(req, res) {
  res.render("index", {
    message: "Handlebars is the best."
  })
  res.send("Browser time!");
});

var Vendor = require("./db/connection").models.Vendor;
var Market = require("./db/connection").models.Market;

app.get("/search", function(req, res) {
    var userMarketSearch = req.query.q
    // search.marketSearch(req.query.q)
    Market.findAll({
        where: {
            name: userMarketSearch
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

    // res.send("search complete")
})

// Index route for markets.
app.get("/markets", function(req, res) {
  // console.log(apiRouter.sayHello())
  // Market.findAll().then(function(markets){
  // var results = apiRouter.marketResults(20001)
  res.render("markets/index", {
    message: "market route"
  })
  // })
});

// Show route for markets.
app.get("/markets/:id", function(req, res) {
  res.render("markets/show", {
    message: "Info for farmer's market " + req.params.id + "."
  })
});

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