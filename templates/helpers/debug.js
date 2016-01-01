const Handlebars = require('handlebars');

Handlebars.registerHelper('debug', function(value) {
  console.log('Value:', value);
});
