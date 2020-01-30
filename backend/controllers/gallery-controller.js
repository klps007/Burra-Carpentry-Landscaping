require('dotenv').config();
const Image = require('../models/Gallery');
const AWS = require('aws-sdk');

exports.indexGallery = async (req, res) => {
  try {
    const images = await Image.find({}, null, {
      sort: { createdAt: 1 }
    });
    res.send(images);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.imageUpload = (req, res) => {
  const file = req.file;
  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });
  const params = {
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
      const newFileUploaded = {
        fileLink: data.Location
      };
      const document = new Image(newFileUploaded);
      document.save(function(error, newFile) {
        if (error) {
          res.status(500).json({ error: true, Message: error.message });
        } else {
          res.send(newFile);
        }
      });
    }
  });
};

// Router to delete a DOCUMENT file
// exports.deleteImage('/:id').delete((req, res, next) => {
//   Image.findByIdAndRemove(req.params.id, (err, result) => {
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
//           status: '200',
//           responseType: 'string',
//           response: 'success'
//         });
//       }
//     });
//   });
// });

// module.exports = router;
