const express = require('express');
const router = express.Router();

const { createQuote } = require('../controllers/quote-controller');

router.get('/', function(req, res, next) {
  res.send('this is the quote route');
});

router.post('/', createQuote);
module.exports = router;
