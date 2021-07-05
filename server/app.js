// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

// dotenv.config({path: './config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

//link router files
app.use(require('./router/auth'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.get('/about', (req, res) => {
    res.send('Hello World About!')
  });

app.get('/contact', (req, res) => {
    res.send('Hello World Contact!')
  });


  



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})