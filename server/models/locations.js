const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const locationsSchema = new Schema({
  locationId: String,
  locationName: String,
  locationType: String,
  closeIndicator: Boolean,
  closeDate: String,
  locationAddress: String
});

const Locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations;
