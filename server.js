/*********************
EXPRESS APP SETUP
**********************/

const express = require('express');
const app = express();
const PORT = 3000;

/*********************
DATA MODEL
**********************/

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

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
});

// Magic 8 Ball

app.get('/magic/:phrase', (req, res) => {
  const answer = Math.floor(Math.random() * responses.length);
  res.send(`<h1>${responses[answer]}</h1>`);
});


/*********************
PORT LISTENER
**********************/

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
