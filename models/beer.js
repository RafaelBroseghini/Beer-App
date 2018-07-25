var mongoose = require("mongoose");


var beerSchema = new mongoose.Schema({
    date: String,
    name: String,
    drinker: String,
    score: Number,
    location: String,
    brewery: String,
    description: String,
    size: String,
    drunk: String,
    latLong: Object,
  })

  module.exports = mongoose.model("Beer", beerSchema);