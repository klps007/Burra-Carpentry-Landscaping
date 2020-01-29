const express = require('express');
const router = express.Router();
//const multer = require('multer');

//const storage = multer.memoryStorage();
//const upload = multer({ storage });

const { indexPage, createReview } = require('../controllers/review-controller');

router.get('/', indexPage);
router.post('/', createReview);

module.exports = router;
