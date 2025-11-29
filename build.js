"use strict";

const fs = require("fs");
const Handlebars = require("handlebars");
const Metalsmith = require("metalsmith");

const assets = require("metalsmith-assets-improved");
const collections = require("@metalsmith/collections");
const layouts = require("@metalsmith/layouts");
const markdown = require("@metalsmith/markdown");
const permalinks = require("@metalsmith/permalinks");
const redirect = require("metalsmith-redirect");
const rssFeed = require("metalsmith-feed");

Handlebars.registerPartial(
  "header",
  fs.readFileSync(__dirname + "/templates/partials/header.hbs").toString()
);
Handlebars.registerPartial(
  "footer",
  fs.readFileSync(__dirname + "/templates/partials/footer.hbs").toString()
);
const helpers = require("./templates/helpers");

const redirects = require("./redirects.js");

function build() {
  console.log("Running Metalsmith build...");

  Metalsmith(__dirname)
    .source("src/content")
    .clean(true)
    .use(
      assets({
        src: "src/static",
        dest: ".",
      })
    )
    .use(
      collections({
        posts: {
          pattern: "posts/*.md",
          sortBy: "date",
          reverse: true,
        },
      })
    )
    .use(markdown())
    .use(
      permalinks({
        pattern: ":dirname?/:basename",
        linksets: [
          {
            match: { collection: "posts" },
            pattern: "posts/:slug",
          },
        ],
      })
    )
    .use(
      layouts({
        engine: "handlebars",
        default: "post.hbs",
        directory: "templates",
        partials: "templates/partials/",
        partialExtension: ".hbs",
      })
    )
    .use(redirect(redirects))
    .use(
      rssFeed({
        collection: "posts",
        site_url: "https://peteroshaughnessy.com",
        title: "Peter O'Shaughnessy",
        description: "Front-End Developer",
        limit: 50,
      })
    )
    .destination("./docs")
    .build(function (err) {
      if (err) throw err;
    });

  console.log("Build complete");
}

// If being included as a dependency, export function, otherwise run immediately
if (module.parent) {
  module.exports = build;
} else {
  build();
}
