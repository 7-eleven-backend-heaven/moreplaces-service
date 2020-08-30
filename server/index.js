const express = require('express');

const app = express();
const path = require('path');

const PORT = 3009;

const dist = path.join(__dirname, '..client/dist');

app.use(express.static(dist));
app.use(express.json());

// ROUTES
app.get('/property/:propertyId');

app.post('/property/:propertyId');

app.put('/property/:propertyId');

app.delete('/property/:propertyId');

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port:', PORT);
  }
});
