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

//exports.router.post('/review', (req, res) => {
//   const { id, name, suburb, review } = req.body;
//   newReview = Review.create({ id, name, suburb, review })
//     .save()
//     .then(newReview => {
//       rert;
//       res.json(newReview);
//       res.send(response);
//       res.redirect('/reviews');
//     })
//     .catch(err => res.json(err));
//   console.log(err);
// });

// exports.router.delete('/reviews/:id', (req, res) => {
//   const { id } = req.params;
//   Reviews.findOneAndDelete({ id })
//     .then(doc => {
//       if (!doc) {
//         return res.send(`No review found at id ${id}`);
//       }
//       res.send(`${doc.name} deleted from database`);
//     })
//     .catch(err => res.json(err));
// });
