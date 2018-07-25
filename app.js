var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    Beer = require("./models/beer")


var beerRoutes = require("./routes/beers")

mongoose.connect('mongodb://localhost/beer');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/beers", beerRoutes)

app.get("/", function(req, res){
  res.render("landing")
})

app.get("*", function(req, res){
  res.send("Unsupported route! Sorry :(")
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Your beer's awaiting on port 3000!")
})