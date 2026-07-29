const lucide = require('lucide-react');
const icons = Object.keys(lucide);
const matches = icons.filter(icon => /doctor|tooth|brush|medical|health|steth|pill|syring|cross|shield|apple/i.test(icon));
console.log(matches.join(', '));
