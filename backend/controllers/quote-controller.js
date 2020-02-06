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
    const updatedQuote = await Quote.findOneAndUpdate({id}, data, { new: true });
    res.status(202).send(updatedQuote);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};


exports.deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuote = await Quote.deleteOne({ id} );
    res.status(202).send(deletedQuote);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};
