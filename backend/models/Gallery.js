const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  title: String,
  image: String,
  imageId: String
});

const Image = mongoose.model('Image', GallerySchema);
module.exports = Image;
