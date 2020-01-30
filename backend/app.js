const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');

const PORT = process.env.PORT || 7070;

app.use(morgan('dev'));
app.use(express.json()); //
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(routes);

// mongooseDB connection
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.log('not connected ❌');
    } else {
      console.log('connected to burradb ✅');
    }
  }
);
mongoose.Promise = global.Promise;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;
