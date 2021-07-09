// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors');
const app = express();


app.options("*", cors());
app.use(cors());


const port = 5000;

// dotenv.config({path: './config.env'});
require('./db/conn');
// const User = require('./model/userSchema');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//link router files
app.use(require('./router/auth'));



// app.get('/about', (req, res) => {
//     res.send('Hello World About!')
//   });

app.get('/contact', (req, res) => {
    res.send('Hello World Contact!')
  });


  



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})