// Load the sequelize.
// Connect the sequelize to the database.
var Sequelize = require("sequelize");
// var databaseConnection = new Sequelize("postgres:///farmony_db");

if (process.env.DATABASE_URL){
  // The application is executed on Heroku, use the postgres database.
  databaseConnection = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true // false
  });
} else {
  // The application is executed on the local machine.
  databaseConnection = new Sequelize("postgres:///farmony_db");
}

// Create farmers market model.
// Create vendors model.
var Market = databaseConnection.import("../models/market");
var Vendor = databaseConnection.import("../models/vendor");
// var Booth = databaseConnection.import("../models/booth");

// Many to many relationship between Vendors and Markets.
Vendor.belongsToMany(Market, {through: 'booth'});
Market.belongsToMany(Vendor, {through: 'booth'});

// Add module exports for sequelize and models.
module.exports = {
  Sequelize: Sequelize,
  databaseConnection: databaseConnection,
  models: {
    Vendor: Vendor,
    Market: Market,
    // Booth: Booth
  }
}