require('dotenv/config');

const Image = require('../models/Gallery');

const cloudinary = require('cloudinary').v2;

exports.indexGallery = async (req, res) => {
  try {
    const images = await Image.find().sort({ _id: -1 });
    res.status(200).json(images);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.uploadImage = async (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
    if (err) {
      req.json(err.message);
    }
    req.body.image = result.secure_url;
    // add image's public_id to image object
    req.body.imageId = result.public_id;

    Image.create(req.body, function(err, image) {
      if (err) {
        res.json(err.message);
        return res.redirect('/');
      }
    });
  });
};

// 'use strict'
// require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const DOCUMENT = require("../models/Document");
// const multer = require("multer");
// var AWS = require("aws-sdk");

// // Multer ships with storage engines DiskStorage and MemoryStorage
// // And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

// // Get all Documents s Routes
// exports.indexGallery("/").get((req, res, next) => {
//     DOCUMENT.find(
//     {},
//     null,
//     {
//       sort: { createdAt: 1 }
//     },
//     (err, docs) => {
//       if (err) {
//         return next(err);
//       }
//       res.status(200).send(docs);
//     }
//   );
// });

// // route to upload a pdf document file
// // In upload.single("file") - the name inside the single-quote is the name of the field that is going to be uploaded.
// exports.imageUpload("/upload", upload.single("file"), function(req, res) {
//   const file = req.file;
//   const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

//   let s3bucket = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
//   });

//   console.log(process.env.AWS_ACCESS_KEY_ID);
//   console.log(process.env.AWS_SECRET_ACCESS_KEY);

//   //Where you want to store your file

//   var params = {
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: file.originalname,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//     ACL: "public-read"
//   };

//   exports.s3bucket.upload(params, function(err, data) {
//     if (err) {
//       res.status(500).json({ error: true, Message: err });
//     } else {
//       res.send({ data });
//       var newFileUploaded = {
//         description: req.body.description,
//         fileLink: s3FileURL + file.originalname,
//         s3_key: params.Key
//       };
//       var document = new DOCUMENT(newFileUploaded);
//       document.save(function(error, newFile) {
//         if (error) {
//           throw error;
//         }
//       });
//     }
//   });
// });

// // Router to delete a DOCUMENT file
// exports.deleteImage("/:id").delete((req, res, next) => {
//   DOCUMENT.findByIdAndRemove(req.params.id, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     //Now Delete the file from AWS-S3
//     // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
//     let s3bucket = new AWS.S3({
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       region: process.env.AWS_REGION
//     });

//     let params = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: result.s3_key
//     };

//     s3bucket.deleteObject(params, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send({
//           status: "200",
//           responseType: "string",
//           response: "success"
//         });
//       }
//     });
//   });
// });

// module.exports = router;

// /* FOR GETTING THE LINK - I COULD USE getSignedUrl like below - with this in the Terminal, I was getting the link of the file, but have to refactor the code to make it fully work with the React frontend.
// The getSignedUrl method takes an operations, a params, and a callback function as arguments. The operation argument is a string that specifies the name of the operation to call, in this case 'getObject'. The 'getObject' request from the AWS S3 SDK returns a 'data.Body'. The urlParams are parameters that take the Bucket name and the name of the key, in this case the file name. The callback function takes two arguments, error and url. The url is the string we would want to place in our file linking tag to point to the file in the respective front-end code (In this case my FileUpload.js React Component).
// ========================
//   s3bucket.upload(params, function(err, data) {
//     if (err) {
//       res.status(500).json({ error: true, Message: err });
//     } else {
//       var urlParams = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: file.originalname
//       };
//       s3bucket.getSignedUrl("getObject", urlParams, function(err, url) {
//         // fileURL = url;
//         console.log(fileURL);
//         res.send({ data });
//       });
//       console.log(fileURL);
//       var newFileUploaded = {
//         description: req.body.description,
//         fileLink: fileURL
//       };
//       var document = new DOCUMENT(newFileUploaded);
//       document.save(function(error, newFile) {
//         if (error) {
//           throw error;
//         }
//       });
//     }
//   });
// //
