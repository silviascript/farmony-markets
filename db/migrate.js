// Require the connection JavaScript file.
var farmonyDatabase = require("./connection");

// Sync.
farmonyDatabase.databaseConnection.sync({force: true}).then(function(){
  process.exit();
});
