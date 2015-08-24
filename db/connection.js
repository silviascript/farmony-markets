// Load the sequelize.
// Connect the sequelize to the database.
var Sequelize = require("sequelize");
var db_connection = new Sequelize("postgress:///farmony_db");

// Create farmers market model.
// Create vendors model.

// Vendors belong to many Farmers Markets.
// Farmers Markets have many vendors.

// Add module exports for sequelize and models.