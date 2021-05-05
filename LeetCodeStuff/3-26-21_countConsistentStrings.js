// /**
//  * @param {string} allowed
//  * @param {string[]} words
//  * @return {number}

// You are given a string allowed consisting of distinct characters 
// and an array of strings words. A string is consistent if all characters 
// in the string appear in the string allowed.
// Return the number of consistent strings in the array words.


//  */
// var countConsistentStrings = function (allowed, words) {

// };


// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.


// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.


/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

//supChars{c : 1}


function countConsistentStrings(allowed, words) {
    // counter for good words
    console.log(allowed)
    let count = 0;
    // create an object to store allowed characters
    let superChars = { };
    // loop allowed string and store each characters
    for (let i = 0; i < allowed.length; i++) {
        // "c a d"
        //  0 1 2
        let letter = allowed[i];
        //if letter is not a key in superChar than add it as key with value 1
        if (!superChars[letter]) {
            superChars[letter] = 1;
        }
    }
    console.log(Object.keys(superChars));
    // loop through words and check each word's characters to see if they match the ones in our object
    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        // loop through each string
        for (let k = 0; k < word.length; k++) {
            //if char matches chars stored; then increment counter
            //if not; break
            if (!superChars[word[k]]) {
                break;
            }
            if (k === word.length - 1 && superChars[word[k]]) {
                count++;
            }
        }
    }
    // return counter
    return count;
};


console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]));
