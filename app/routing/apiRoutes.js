// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Dependencies
// =============================================================
const path = require("path");

let friends = require("../data/friends.js");

//take in answers from survey and add to loveBirds array 
//compare the answers objects to find matches 
