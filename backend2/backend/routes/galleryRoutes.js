require('dotenv').config();
const express = require('express');
const router = express.Router();
const image = require('../models/Gallery');

const multer = require('multer');
var AWS = require('aws-sdk');

// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// Get all Documents s Routes
router.route('/').get((req, res, next) => {
  image.find(
    {},
    null,
    {
      sort: { createdAt: 1 }
    },
    (err, images) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(images);
    }
  );
});

// Route to get a single existing GO data (needed for the Edit functionality)
router.route('/:id').get((req, res, next) => {
  image.findById(req.params.id, (err, go) => {
    if (err) {
      return next(err);
    }
    res.json(go);
  });
});

// route to upload a pdf document file
// In upload.single("file") - the name inside the single-quote is the name of the field that is going to be uploaded.
router.post('/upload', upload.single('file'), function(req, res) {
  const file = req.file;
  const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  //Where you want to store your file

  var params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read'
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      res.send({ data });
      var newImageUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      var image = new Image(newImageUploaded);
      image.save(function(error, newImage) {
        if (error) {
          throw error;
        }
      });
    }
  });
});

// Router to delete a DOCUMENT file
router.route('/:id').delete((req, res, next) => {
  DOCUMENT.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return next(err);
    }
    //Now Delete the file from AWS-S3
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
    let s3bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    let params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: result.s3_key
    };

    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: '200',
          responseType: 'string',
          response: 'success'
        });
      }
    });
  });
});

module.exports = router;

// const express = require('express');
// const express = require("express")
// const router = express.Router();
// const mongoose = require('mongoose');
// const multer = require('multer');
// const upload = multer({ dest: '/uploads' });

// const Gallery = require('../models/gallery')

// // router.get('/', function(req, res, next) {
// //         Image.find()
// //   });

// // const storage = multer.memoryStorage();
// // const upload = multer({ storage });

// // const { index } = require('../controllers/gallery-controller');

// // router.get('/', (req, res, next)  => {
// //   image
// // });

// router.post("/admin/", upload.single('galleryImagee') (req, res, next) => {

// const new`Image = new Image ({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     description: req.body.description
// });
//     newImage
//     .save()
//     .then(result => {

//     })
//     // const uploadFile = (req.body.imageUpload);
//     const params = {
//       Bucket: bucketName,
//       Key: (folder + file),
//       ACL: 'public-read',
//       Body: file
//     };
//     console.log("Folder name: " + folder);
//     console.log("File: " + file);

//     s3.putObject(params, function (err, data) {
//       if (err) {
//         console.log("Error: ", err);
//       } else {
//         console.log(data);
//       }
//     });
//     res.redirect("/feed");
//   });

// module.exports = router;
