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

app.use("/public", express.static(path.join(__dirname + "/public")));
app.use(express.static('public'));

// Set up the HBS.
app.set("view engine", "hbs");

// Port listener.
app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function() {
  console.log("Listening on port 3000.");
});


// Connect search engine
// if working, this belongs in backend models
// var search = require("./db/search.js")

// Module to connect to the database specified in your DATABASE_URL.
var pg = require('pg');

// Load Models
var Vendor = require("./db/connection").models.Vendor;
var Market = require("./db/connection").models.Market;

// Connect Controllers
var vendorsController = require("./controllers/vendors.js");
var marketsController = require("./controllers/markets.js");

// Use the loaded controllers
app.use("/", vendorsController);
app.use("/", marketsController);

// Connect to the Farmers Market API.
// var apiRouter = require("./public/js/market_api.js")

// Connect to the browser.
app.get("/", function(req, res){
  res.redirect("markets")
});

app.get("/search", function(req, res) {
  var searchTerm = req.query.q
  searchMarketsbyName(searchTerm).
  then(function(marketNameResults) {
    searchMarketsbyZip(searchTerm)
    .then(function(marketZipResults) {
      finalResults = {byName: marketNameResults, byZip: marketZipResults}
      res.render("markets/search", {
        results: finalResults
      })
    })
  })
})



function searchMarketsByName(term) {
  return (Market.findAll({
    where: {
      $or: [{
        name: {
          $iLike: '%' + term + '%'
        }
      }, {
        products: {
          $iLike: '%' + term + '%'
        }
      }]
    }
  }))
}

function searchMarketsByZip(term) {
  return( Market.findAll({ where: { addressZip: term } }) );
}

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
