// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
var port = process.env.port || 3000;

// Sets up the Express app to handle data parsing (middleware)
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing
// =============================================================
//require(path.join(__dirname, './app/routing/apiRoutes'))(app);
//require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("App listening on port: " + port);
  });

