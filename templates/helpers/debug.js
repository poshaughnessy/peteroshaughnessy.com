const Handlebars = require('handlebars');

Handlebars.registerHelper('debug', function(optionalValue) {

  console.log('Current Context', this);

  if (optionalValue) {
    console.log('Value', optionalValue);
  }

});
