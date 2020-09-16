require('newrelic');
const compression = require('compression');
const express = require('express');
const db = require('../database/index.js');

const app = express();
const path = require('path');

const PORT = 3009;

const dist = path.join(__dirname, '../client/dist');

app.use(compression());
app.use('/properties/:propertyId', express.static(dist));
app.use(express.json());

app.get('/property/:propertyId', (req, res) => {
  const id = req.params.propertyId;
  db.query(`SELECT * from properties where (propertyid IN (select relatedid from related where mainpropid = ${id}))`, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.post('/savedlist', (req, res) => {
  const place = req.body;
  db.query(`INSERT INTO savedlists (listname) VALUES ('${place}')`, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Added to Saved Lists');
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port:', PORT);
  }
});
