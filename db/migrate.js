// Require the connection JavaScript file.
var FarmonyDatabase = require("./connection");

// Sync.
FarmonyDatabase.do.sync({force: true}).then(function(){
  process.exit();
});