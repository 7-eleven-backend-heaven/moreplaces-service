// install dependencies
const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/index.js');

const PORT = 3013;

// create middleware
let logRequests = (req, res, next) => {
  console.log(`Request type: ${req.method} from path: ${req.path}`);
  next();
}
app.use(logRequests);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());


// create routes

//GET request for one property
app.get('/test1', (req, res) => {
  db.getProperty(req.query, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(results);
    }
  })
})

//GET request for all properties
app.get('/test-seeder', (req, res) => {
  db.getAllProperties( (err, results) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).send(results);
    }
  });
})


// start server
app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Server is listening on port:', PORT);
  }
})
