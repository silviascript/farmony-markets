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

//needed for twitter OAuth (passport, passport-twitter)
var env = require("./env")
var session = require("express-session")
var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
app.use(session({
  secret: "ninja please"
}))
passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(obj, done) {
  done(null, obj)
})
app.use(passport.initialize());
app.use(passport.session());

passport.use(new TwitterStrategy({
  consumerKey: env.consumerKey,
  consumerSecret: env.consumerSecret,
  callbackUrl: env.callbackUrl
},  function(aToken, aTokenSecret, aProfile, done){
  token = aToken
  tokenSecret = aTokenSecret
  profile = aProfile
  done(null, profile)
}))

//routes for twitter OAuth
app.get("/auth/twitter", passport.authenticate("twitter"), function (req, res){})
app.get("/auth/twitter/callback", passport.authenticate('twitter'), function(req, res){
  req.session.token = token
  req.session.tokenSecret = tokenSecret
  req.session.profile = profile
  res.redirect("/vendors")
})
app.get("/signout", function(req, res){
  req.session.destroy()
  res.redirect("/vendors")
})


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
app.set("port", (process.env.PORT || 3001));

app.listen(app.get("port"), function(){
 console.log("Listening on port 3001.");
});
