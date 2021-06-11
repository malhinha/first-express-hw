/*********************
EXPRESS APP SETUP
**********************/

const express = require('express');
const app = express();
const PORT = 3000;


/*********************
INDUCE ROUTES
**********************/

app.get('/', (req, res) => {
  res.send('<h1>99 Bottles of beer on the wall</h1><a href=\'/98\'>take one down, pass it around</a>');
});

app.get('/:number_of_bottles', (req, res) => {
  if (req.params.number_of_bottles == 0) {
    res.send(`<h1>No more beer!</h1><a href=\'/\'>do it all again?</a>`);
  } else if (req.params.number_of_bottles == 1) {
    const nextBottle = parseInt(req.params.number_of_bottles, 10) - 1;
    res.send(`<h1>Only ${req.params.number_of_bottles} bottle of beer on the wall</h1><a href=\'${nextBottle}\'>take one down, pass it around</a>`);

  } else {
    const nextBottle = parseInt(req.params.number_of_bottles, 10) - 1;
    res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1><a href=\'${nextBottle}\'>take one down, pass it around</a>`);
  };
});


/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
