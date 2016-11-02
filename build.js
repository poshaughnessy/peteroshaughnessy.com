'use strict';

const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const collections = require('metalsmith-collections');
const permalinks  = require('metalsmith-permalinks');
const templates = require('metalsmith-templates');
const redirect = require('metalsmith-redirect');
const rssFeed = require('metalsmith-feed');
const Handlebars = require('handlebars');
const helpers = require('./templates/helpers');
const fs = require('fs');

const redirects = require('./redirects.js');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbs').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbs').toString());

function build() {

  console.log('Running Metalsmith build...');

  Metalsmith(__dirname)
    .use(collections({
      posts: {
        pattern: 'content/posts/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(markdown())
    .use(permalinks({
      pattern: ':collection/:slug'
    }))
    .use(templates('handlebars'))
    .use(redirect(redirects))
    .use(rssFeed({
      collection: 'posts', 
      site_url: 'https://peteroshaughnessy.com',
      title: 'Peter O\'Shaughnessy',
      description: 'Tech geek, web developer and advocate',
      limit: 50
    }))
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
