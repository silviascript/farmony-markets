// Require express to application.
// Connect Sass to application.
// Connect express to application.
// Connect path middleware.
var express = require("express");
var sassMiddleware = require("node-sass-middleware");
var app = express();
var path = require("path");

// Connect bodyparser middleware.
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect Controllers
var vendorsController = require("./controllers/vendors.js");

// Connecting to public assets.
app.use(sassMiddleware({
  src: __dirname  + '/public/sass/',
  dest: path.join(__dirname, '/public/css/'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/prefix'
}));

app.use("/public", express.static(path.join(__dirname + "/public")));

// Set up the HBS.
app.set("view engine", "hbs");

// Connect to the Farmers Market API.
// var apiRouter = require("./public/js/market_api.js")

// using connected exports
// disabled until routes/views are updated

app.use("/", vendorsController);

// Connect to the browser.
app.get("/", function(req, res){
  res.render("index", {message: "Handlebars is the best."})
  res.send("Browser time!");
});

// Index route for markets.
app.get("/markets", function(req,res){
  // console.log(apiRouter.sayHello())
  // Market.findAll().then(function(markets){
    // var results = apiRouter.marketResults(20001)
    res.render("markets/index", {message: "market route"})
  // })
});

// Show route for markets.
app.get("/markets/:id", function(req,res){
  res.render("markets/show", {message: "Info for farmer's market " + req.params.id + "."})
});

// Create route for about.
app.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

// Create route for contact.
app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

// Port listener.
app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){
 console.log("Listening on port 3000.");
});
