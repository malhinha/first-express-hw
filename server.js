/*********************
EXPRESS APP SETUP
**********************/

const express = require('express');
const app = express();
const PORT = 3000;


/*********************
INDUCE ROUTES
**********************/

// Greetings

app.get('/greeting/:name', (req, res) => {
  res.send(`Salutations honorable ${req.params.name}. I take thee is well?`);
});


/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
