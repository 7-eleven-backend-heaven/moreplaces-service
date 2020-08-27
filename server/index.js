const express = require('express');

const app = express();

const PORT = 3009;

app.use(express.json());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port:', PORT);
  }
});
