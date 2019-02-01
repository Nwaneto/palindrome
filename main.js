let Phrase = require("chidi-palindrome");
let string = prompt("Please enter a string for palindrome testing");

let phrase = new Phrase(string);

if (phrase.palindrome()) {
    alert (`"${phrase.content}" is a Palindrome!`);
} else {
    alert (`"${phrase.content}" is not a palindrome!`)
}

//alert(new Phrase("Madam, I'm adam.").palindrome());