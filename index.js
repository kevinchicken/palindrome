module.exports = Phrase;

// Reverses a string
function reverse (string) {
    return Array.from(string).reverse().join("");
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Adds `blank` to all strings.
String.prototype.blank = function() {
    return !!this.match(/^\s*$/);
}

// Adds a slicing method to all arrays.
Array.prototype.last = function() {
    return this[this.length-1];
}

//Defines a Phrase object
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase()
    }
    
    //Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.content); 
    }

    // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome () {
        return this.processedContent() === reverse(this.processedContent());
    }

    // Makes the phrase LOUDER.
    this.louder = function() {
        return this.processor(this.content);
    };
}

//Defines a TranslatedPhrase object.
function Translatedphrase(content, translation) {
    this.content = content;
    this.translation = translation;

    //Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.translation); 
    }
}
