require('newrelic');
const express = require('express');
const db = require('../database/index.js');

const app = express();
const path = require('path');

const PORT = 3009;

const dist = path.join(__dirname, '../client/dist');

app.use(express.static(dist));
app.use(express.json());

// ROUTES
app.get('/property/:propertyId', (req, res) => {
  const id = req.params.propertyId;
  db.query(`SELECT * from properties where (propertyid IN (select relatedid from related where mainpropid = ${id}))`, (err, results) => {
    if (err) {
      res.status(500).send(err);
      // console.log(err);
    } else {
      res.status(200).send(results.rows);
      // console.log(results);
    }
  });
});

app.post('/property');

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port:', PORT);
  }
});
