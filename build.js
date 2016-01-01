'use strict';

const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const collections = require('metalsmith-collections');
const permalinks  = require('metalsmith-permalinks');
const templates = require('metalsmith-templates');
const Handlebars = require('handlebars');
const helpers = require('./templates/helpers');
const fs = require('fs');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbs').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbs').toString());

function build() {

  console.log('Running Metalsmith build...');

  Metalsmith(__dirname)
    .use(collections({
      pages: {
        pattern: 'content/pages/*.md'
      },
      posts: {
        pattern: 'content/posts/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(markdown())
    .use(permalinks({
      pattern: ':collection/:title'
    }))
    .use(templates('handlebars'))
    .destination('./build')
    .build(function(err) {
      if (err) throw err;
    });

  console.log('Build complete');

}

// If being included as a dependency, export function, otherwise run immediately
if (module.parent) {
  module.exports = build;
} else {
  build();
}
