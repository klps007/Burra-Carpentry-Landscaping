// require dependancies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
//const morgan = require('morgan');
//const path = require('path');
//create new instance of express app

// set routes = /routes
const routes = require('./routes');

const PORT = process.env.PORT || 7070;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // middleware
// app.use(morgan('dev'));
// body parsers
app.use(express.json()); //
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

// mongooseDB connection
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log('not connected ❌');
    } else {
      console.log('connected to burradb ✅');
    }
  }
);

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;
