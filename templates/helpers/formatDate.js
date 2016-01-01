const Handlebars = require('handlebars');
const moment = require('moment');

const DEFAULT_FORMAT = 'Do MMM YYYY';

/*
 * Usage: {{formatDate aDate format="MMMM YYYY"}}
 */
Handlebars.registerHelper('formatDate', function(context, block) {
  var f = block.hash.format || DEFAULT_FORMAT;
  return moment(context).format(f);
});
