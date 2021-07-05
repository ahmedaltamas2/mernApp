const mongoose = require('mongoose');

const DB = 'mongodb+srv://altamas:altamas@cluster0.fqhon.mongodb.net/mernApp?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, //for warning
    useFindAndModify: false
  }).then(() => {
    console.log('connection successfull');
  
  }).catch((err) => console.log('no connection'));