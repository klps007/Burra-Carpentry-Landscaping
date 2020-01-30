const express = require('express');
const router = express.Router();

const { indexPage, createReview } = require('../controllers/review-controller');

router.get('/', indexPage);
router.post('/', createReview);

module.exports = router;
