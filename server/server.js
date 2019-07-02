// 1. imports/requires the packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// port
const PORT = 3000;

const app = express();

// handle the json data
app.use(bodyParser.json());

app.use(cors());

// test/check get request
app.get('/',function(req, res){
  res.send('Hello from server!');
})

// add endpoint
app.post('/enroll', function(req,res){
  // req.body - contains user data send by the angular
  console.log(req.body);
  // send response
  res.status(200).send({'message': req.body});

  // to see errors 
  // res.status(401).send({'message': 'Data received'});
})

// listen to request
app.listen(PORT, function(){
  console.log('Server running on localhost port: ', PORT);
})
