const Review = require('../models/Review');

exports.indexPage = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ _id: -1 });
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.viewReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    res.status(200).send(review);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.createReview = async (req, res) => {
  try {
    const data = req.body;
    const newReview = await Review.create(data);
    res.status(201).send(newReview);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);
    res.status(202).send(deletedReview);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};
