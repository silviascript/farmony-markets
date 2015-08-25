// Load the sequelize.
// Connect the sequelize to the database.
var Sequelize = require("sequelize");
// var databaseConnection = new Sequelize("postgres:///farmony_db");


if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  databaseConnection = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  databaseConnection = new Sequelize("postgres:///farmony_db");
}

// Create farmers market model.
// // Create vendors model.
var Market = databaseConnection.import("../models/market");
var Vendor = databaseConnection.import("../models/vendor");

// Vendors belong to many Farmers Markets.
// Farmers Markets have many vendors.
Vendor.belongsTo(Market);
Market.hasMany(Vendor);

// Add module exports for sequelize and models.
module.exports = {
  Sequelize: Sequelize,
  databaseConnection: databaseConnection,
  models: {
    Vendor: Vendor,
    Market: Market
  }
}
