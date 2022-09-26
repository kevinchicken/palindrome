$ npm install --global kflores-palindrome
$ vim test.js
let Phrase = require("kflores-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true