Phrase object (with palindrome detector)
This is a sample NPM module created by Chidi Nwaneto from LLJtobeD.

The module can be used as follows:

$ npm install --global chidi-palindrome
$ vim test.js
let Phrase = require("chidi-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true