// var express = require('express'), // "^4.13.4"
//   aws = require('aws-sdk'), // ^2.2.41
//   bodyParser = require('body-parser'),
//   multer = require('multer'), // "multer": "^1.1.0"
//   multerS3 = require('multer-s3'); //"^1.4.1"

// aws.config.update({
//   secretAccessKey: 'W/u0ABGCotJJy1Zf8I3lWtI36fiRACsqutqTq28s',
//   accessKeyId: 'AKIAJ7ITMZS227TKVKYQ',
//   region: 'ap-southeast-2'
// });

// var app = express(),
//   s3 = new aws.S3();

// app.use(bodyParser.json());

// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'burracl',
//     key: function(req, file, cb) {
//       console.log(file);
//       cb(null, file.originalname); //use Date.now() for unique file keys
//     }
//   })
// });

// //open in browser to see upload form
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// //used by upload form
// router.post('/upload', upload.array('upl', 1), function(req, res, next) {
//   res.send('Uploaded!');
// });
