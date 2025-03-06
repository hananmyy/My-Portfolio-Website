const express = require("express");
const app = express()
const ejs = require("ejs");
const path = require('path')


app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));


// Define routes
app.get("/", (req, res) =>{
    res.render("index")
})


app.listen(3200, () => {
  console.log("App listening on port 3200");
});
