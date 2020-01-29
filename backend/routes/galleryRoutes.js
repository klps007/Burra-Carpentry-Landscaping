const express = require('express');
const router = express.Router();

const { indexGallery } = require('../controllers/gallery-controller');

router.get('/', indexGallery);

module.exports = router;
