const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', function(req, res, next) {
  res.send('This is the landing page');
});

router.use('/getquote', require('./quoteRoutes'));
router.use('/reviews', require('./reviewsRoutes'));
router.use('/gallery', require('./galleryRoutes'));

// These need to be auth-protected
router.use('/admin', require('./adminRoutes'));

module.exports = router;
