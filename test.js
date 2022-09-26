let assert = require ("assert");
let Phrase = require ("../index.js");

describe("Phrase", function(){
    //Phrase#palindrome
    describe("#palindrome", function() {

        it("Should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });
        
        it("Should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });
    });
}
);