'use strict';

const express = require('express'),
  build = require('./build'),
  PORT = process.env.PORT || 9000;

build();

let app = express();

app.use( '/', express.static('docs') );

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT);

console.log('Started server on port', PORT);
