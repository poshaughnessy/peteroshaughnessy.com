'use strict';

let Metalsmith = require('metalsmith');
let markdown = require('metalsmith-markdown');
let templates  = require('metalsmith-templates');
let handlebars = require('handlebars');

console.log('Run Metalsmith build');

Metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .destination('./build')
  .build(function(err) {
    if (err) throw err;
  });

console.log('Did it work?');
