const mongoose = require("mongoose");

let quoteSchema = new mongoose.Schema(
  {
    createdTime: { type: Date, default: Date.now },

    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    preferred: String,

    streetAddress: String,
    suburb: String,
    postcode: String,
    commercialOrResidential: String,
    planningOnlyOrReadyNow: String,
    approxStartDate: Date,
    budget: Number,
    needFinance: Boolean,
	approxsizeSQM: Number,
	additionalDetails: String,
    serviceRequired: []
    // [
    //   {
    //     paving: String,
    //     patio: String,
    //     retainingWall: String,
    //     fencing: String,
    //     decking: String,
    //     poolArea: String,
    //     waterFeature: String,
    //     newLawn: String,
    //     newPlants: String,
    //     treeRemoval: String,
    //     rubbishRemoval: String,
    //     inHomeCarpentry: String,
    //     walkInRobe: String,
    //     additionalDetails: String
    //   }
    // ]
  },
  { collection: "quotes" }
);

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;

  


  // [
  //   {
  //     paving: String,
  //     patio: String,
  //     retainingWall: String,
  //     fencing: String,
  //     decking: String,
  //     poolArea: String,
  //     waterFeature: String,
  //     newLawn: String,
  //     newPlants: String,
  //     treeRemoval: String,
  //     rubbishRemoval: String,
  //     inHomeCarpentry: String,
  //     walkInRobe: String,
  //     additionalDetails: String
  //   }
  // ]