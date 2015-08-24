// Load the sequelize.
// Connect the sequelize to the database.
var Sequelize = require("sequelize");
var databaseConnection = new Sequelize("postgres:///farmony_db");

// Create farmers market model.
// Create vendors model.
var Market = databaseConnection.import("../models/market");
var Vendor = databaseConnection.import("../models/vendor");

// Vendors belong to many Farmers Markets.
// Farmers Markets have many vendors.
Vendor.belongsTo(Market);
Market.hasMany(Vendor);

// Add module exports for sequelize and models.
module.exports = {
  Sequelize: Sequelize,
  sequelize: databaseConnection,
  models: {
    Vendor: Vendor,
    Market: Market
  }
}