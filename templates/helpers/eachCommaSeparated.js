const Handlebars = require('handlebars');

Handlebars.registerHelper('eachCommaSeparated', function(string, options) {

  var ret = '';

  const array = string.split(',');
  const length = array.length;

  for (var i=0; i < length; i++) {
    ret = ret + options.fn(array[i]);
  }

  return ret;

});
