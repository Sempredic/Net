const express = require('express');

const app = express();

app.use(express.static(__dirname + '/app'));

/*
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});
*/

app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, {root: __dirname + '/app'}); //include/app/index.html
});


module.exports = app;
