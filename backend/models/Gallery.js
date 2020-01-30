// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const GallerySchema = new Schema({
//   title: String,
//   image: String,
//   image: String
// });

// const Image = mongoose.model('Image', GallerySchema);
// module.exports = Image;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// library for handling autoincrement in mongoose
// https://github.com/ramiel/mongoose-sequence

let gallerySchema = new Schema(
  {
    fileLink: { type: String }
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true
  }
);

module.exports = mongoose.model('Image', gallerySchema);
