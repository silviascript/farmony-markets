// Require the connection JavaScript file.
var farmonyDatabase = require("./connection");

// Sync.
farmonyDatabase.sequelize.sync({force: true}).then(function(){
  process.exit();
});