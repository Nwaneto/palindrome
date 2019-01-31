module.exports = Phrase;
    // Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
};
  // Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    };

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    };
    
    //Returns true for mixed case palindrome
    this.mixedCase = function mixedCase() {
        return this.content.toLowerCase() === this.processedContent();
    }

    //Returns true for punctuated palindromes
    this.letters = function letters() {
        return this.content.match(/[a-z]/gi || []).join("");
    }
}
