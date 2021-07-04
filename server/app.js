const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;


const DB = 'mongodb+srv://altamas:altamas@cluster0.fqhon.mongodb.net/mernApp?retryWrites=true&w=majority'

mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('connection successfull');

}).catch((err) => console.log('no connection'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
    res.send('Hello World About!')
  });

app.get('/contact', (req, res) => {
    res.send('Hello World Contact!')
  });


  



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})