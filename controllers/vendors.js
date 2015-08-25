var express = require("express");
var router = express.Router();
var Vendor = require("../db/connection").models.Vendor;

function error(response, message){
    response.status(500);
    response.json({error: message})
}
// All vendors
router.get("/vendors", function(req, res){
  Vendor.findAll().then(function(vendors){
    res.json(vendors);
  });
});

// Create vendors
router.post("/vendors", function(req, res){
  Vendor.create(req.body).then(function(vendor){
    res.json(vendor);
  });
});

// Find vendor by ID
router.get("/vendors/:id", function(req, res){
  Vendor.findById(req.params.id).then(function(vendor){
    if(!vendor) return error(res, "not found");
    res.json(vendor);
  });
});

// Update vendor
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
