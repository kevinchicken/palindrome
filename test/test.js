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

        it("Should return true for a mixed case palindrome", function() {
            let mixedPalindrome = new Phrase("RaceCar");
            assert(mixedPalindrome.palindrome());
        }
        );
            
        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });

        it("Should return false for a empty string", function() {
            let emptyPhrase = new Phrase("");
            assert(!emptyPhrase.palindrome());
        });

        describe("#letters", function() {
            it("Should return only letters", function() {
                let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
                assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
            });
                });
    });
});