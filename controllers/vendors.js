var express = require("express");
var router = express.Router();
var Vendor = require("../db/connection").models.Vendor;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

// All vendors.
router.get("/vendors", function(req, res){
  Vendor.findAll().then(function(vendors){
    res.render("vendors/index", {vendors: vendors});
  });
});

// New vendor form.
router.get("/vendors/new", function(req, res){
  res.render("vendors/new")
})

// Create vendors.
router.post("/vendors", function(req, res){
  console.log("search1")
  Vendor.create(req.body).then(function(vendor){
    console.log("search2")
    res.redirect("/vendors/" + vendor.id);
  });
});

// Find vendor by ID.
router.get("/vendors/:id", function(req, res){
  // var vendor = Vendor.findById(req.params.id)
  Vendor.findById(req.params.id).then(function(vendor){
    if(!vendor) return error(res, "not found");
      res.render("vendors/show", {vendor: vendor})
  });
});

// Update vendor.
router.patch("/vendors/:id", function(req, res){
  Vendor.findById(req.params.id).then(function(vendor){
    if(!vendor) return error(res, "not found");
    vendor.updateAttributes(req.body).then(function(updateVendor){
      res.json(updateVendor);
    });
  });
});

router.delete("/vendors/:id", function(req, res){
  Vendor.findById(req.params.id).then(function(vendor){
    if(!vendor) return error(res, "not found");
    vendor.destroy().then(function(){
      res.json({success: true});
    });
  });
});

module.exports = router;