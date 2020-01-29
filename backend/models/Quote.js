const mongoose = require('mongoose');

let quoteSchema = new mongoose.Schema(
  {
    createdTime: { type: Date, default: Date.now },

    name: {
      firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      }
    },
    contact: {
      phone: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      preferred: String
    },
    address: {
      streetAddress: String,
      suburb: String,
      postcode: String
    },
    particulars: {
      commercialOrResidential: String,
      planningOnlyOrReadyNow: String,
      approxStartDate: Date,
      budget$: Number,
      needFinance: Boolean,
      approxsizeSQM: Number
    },
    serviceRequired: {
      paving: String,
      patio: String,
      retainingWall: String,
      fencing: String,
      decking: String,
      poolArea: String,
      waterFeature: String,
      newLawn: String,
      newPlants: String,
      treeRemoval: String,
      rubbishRemoval: String,
      inHomeCarpentry: String,
      walkInRobe: String,
      additionalDetails: String
    }
  },
  { collection: 'quotes' }
);

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
