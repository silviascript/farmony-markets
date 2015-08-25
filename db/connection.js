// Load the sequelize.
// Connect the sequelize to the database.
var Sequelize = require("sequelize");
var db_connection = new Sequelize("postgress:///farmony_db");

// Create farmers market model.
// Create vendors model.
var Market = sequelize.import("../models/vendor");
var Vendor = sequelize.import("../models/vendor");

// Vendors belong to many Farmers Markets.
// Farmers Markets have many vendors.
Vendor.belongsTo(Market);
Market.hasMany(Vendor);

// Add module exports for sequelize and models.
module.export = {
  sql: Sequelize,
  do: sequelize,
  models: {
    Vendor: Vendor,
    Market: Market
  }
}