var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const { checkAdmin } = require('../middleware/jwt');

const {
  login,
  register,
  checkUser
} = require('../controllers/admin-controller');

router.get('/', checkAdmin, function(req, res) {
  res.send('admin dasboard - this is a protected route');
});

router.get('/checkUser', checkUser);
router.post('/login', login);
router.post('/register', register);

//  CRUD routes for Quote

const {
  indexQuote,
  viewQuote,
  updateQuote,
  deleteQuote
} = require('../controllers/quote-controller');

router.get('/quotes', indexQuote);
router.get('/quote/:id', viewQuote);
router.put('/quote/:id', updateQuote);
router.delete('quote/:id', deleteQuote);

// CRUD for Reviews
const {
  indexPage,
  viewReview,
  deleteReview
} = require('../controllers/review-controller');

router.get('/reviews', indexPage);
router.get('/review/:id', viewReview);
router.delete('/review/:id', deleteReview);

const {
  indexGallery,
  remove,
  uploadImage
} = require('../controllers/gallery-controller');

router.get('/gallery', indexGallery);
//router.delete('/gallery/:id', remove);
router.post('/gallery/:id', upload.single('file'), uploadImage);

module.exports = router;
