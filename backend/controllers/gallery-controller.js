require('dotenv/config');

const Image = require('../models/Gallery');

const cloudinary = require('cloudinary');

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

// // // Router to delete a DOCUMENT file
// router.route("/:id").delete((req, res, next) => {
//     DOCUMENT.findByIdAndRemove(req.params.id, (err, result) => {
//       if (err) {
//         return next(err);
//       }
//       //Now Delete the file from AWS-S3
//       // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
//       let s3bucket = new AWS.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//         region: process.env.AWS_REGION
//       });

//       let params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: result.s3_key
//       };

//       s3bucket.deleteObject(params, (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send({
//             status: "200",
//             responseType: "string",
//             response: "success"
//           });
//         }
//       });
//     });
