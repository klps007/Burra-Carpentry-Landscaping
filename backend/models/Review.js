const mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema(
  {
    createdTime: { type: Date, default: Date.now },

    name: {
      type: String,
      required: true
    },
    suburb: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  },
  { collection: 'reviews' }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
