var handlebars = require('handlebars');
var products = require('product.json');

var source = 'q2.xml';


var template = handlebars.compile(source);

var outputString = template(products);