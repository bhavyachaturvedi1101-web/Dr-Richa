const fa = require('react-icons/fa');
const gi = require('react-icons/gi');
const tb = require('react-icons/tb');

const faKeys = Object.keys(fa).filter(k => /tooth|brush|apple|water|smoke|steth|med|health/i.test(k));
const giKeys = Object.keys(gi).filter(k => /tooth|brush|apple|water|smoke|steth|med|health/i.test(k));
const tbKeys = Object.keys(tb).filter(k => /tooth|brush|apple|water|smoke|steth|med|health/i.test(k));

console.log('FA:', faKeys.join(', '));
console.log('GI:', giKeys.join(', '));
console.log('TB:', tbKeys.join(', '));
