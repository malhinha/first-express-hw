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

// Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
  const tipTotal = (parseInt(req.params.total, 10))*((parseInt(req.params.tipPercentage, 10))/100);
  res.send(`${tipTotal}`);

  // const totalInt = parseInt(req.params.total, 10);
  // console.log(totalInt, typeof totalInt);
});


/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
