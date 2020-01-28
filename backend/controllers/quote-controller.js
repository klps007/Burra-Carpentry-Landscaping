const Quote = require('../models/Quote');

exports.indexQuote = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ _id: -1 });
    res.status(200).send(quotes);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.viewQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findById(id);
    res.status(200).send(quote);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.createQuote = async (req, res) => {
  try {
    const data = req.body;
    const newQuote = await Quote.create(data);
    res.status(201).send(newQuote);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedQuote = await Quote.findByIdAndUpdate(id, data, { new: true });
    res.status(202).send(updatedQuote);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

exports.deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuote = await Quote.findByIdAndDelete(id);
    res.status(202).send(deletedQuote);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

// exports.emailQuote = async (req, res) => {
//   try {
//     const emailString = req.body['stripped-text'];
//     const emailSubject = req.body['Subject'];
//     let quoteData;
//     if (emailSubject === 'Burra Carpentry and Landscaping Quote') {
//       quoteData = parseQuote(emailString);
//     } else {
//       quoteData = parseEmail(emailString);
//     }
//     const foundQuote = await Quote.findOne({ email: quoteData.email });
//     if (foundQuote) {
//       res.send('Already have it.');
//       console.log('A duplicate was sent.');
//     } else {
//       await Quote.create(quoteData);
//       res.send('thanks'); // Mailgun notified of success and will not retry
//     }
//   } catch (error) {
//     console.log(error.stack);
//     res.status(500).send(error.message);
//   }
// };

// const uploadImage = async (req, res) => {
//   try {
//     const { buffer } = req.file;
//     const { id } = req.params;
//     const { url } = await uploadFile(buffer);
//     const updatedQuote = await Quote.findByIdAndUpdate(s
//       id,
//       {
//         $push: { imageUrls: url }
//       },
//       { new: true }
//     );
//     res.status(202).send(updatedQuote);
//   } catch (error) {
//     console.log(error.stack);
//     res.status(500).send(error.message);
//   }
// };
