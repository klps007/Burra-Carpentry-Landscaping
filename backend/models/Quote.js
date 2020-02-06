const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


let QuoteSchema = new mongoose.Schema(
  {
	createdTime: { type: Date, default: Date.now },
	id: { 
		type: Number
	},

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
    approxStartDate: String,
    budget: Number,
    needFinance: Boolean,
	approxsizeSQM: Number,
	additionalDetails: String,
    serviceRequired: []
	
	});
  

 
  
  { collection: "quotes" }

QuoteSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
const Quote = mongoose.model("Quote", QuoteSchema);
module.exports = Quote;
