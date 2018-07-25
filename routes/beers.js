var express = require("express"),
    request = require("request"),
    router = express.Router();

var Beer = require("../models/beer")

router.get("/",function(req, res){
    Beer.find({}, function(err, beers){
      res.render("table", {data:beers})
    })
  })

  
router.post("/", function(req, res){
    var beerName = req.body.name,
        beerDrinker = req.body.drinker,
        beerBrewery = req.body.brewery,
        beerLocation = req.body.location,
        beerDescription = req.body.description,
        beerDate = req.body.date,
        beerScore = req.body.score,
        beerDrunk = req.body.drunk,
        beerSize = req.body.size;


    var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+beerLocation+"&key=AIzaSyA60dGR3kugo19bbYVSIZl3bUYsNQ6nbiw";
    request(url, function(error, response, body){
    var parsedData = JSON.parse(body);
    
    var longitudeLatitude = parsedData.results[0].geometry.location
    
    Beer.create({
        date: beerDate,
        drinker: beerDrinker,
        name: beerName,
        description: beerDescription,
        brewery: beerBrewery,
        location: beerLocation,
        drunk: beerDrunk,
        score: beerScore,
        size: beerSize,
        latLong: longitudeLatitude,
    })
    res.redirect("/beers");
    })  
})

router.get("/map", function(req,res){
    Beer.find({}, function(err, beers){
      res.render("map", {data:beers})
    })
  })


module.exports = router;