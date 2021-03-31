
// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting 
// with word1. If a string is longer than the other, append the additional 
// letters onto the end of the merged string.
// Return the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
    let output = "";
    // console.log(word1);

    if(word1.length >= word2.length){
        for(var i=0; i < word1.length; i++){
            //if word1[i] is true
            if(word1[i]){
                output = output + word1[i]
            }
            if(word2[i]){
                output = output + word2[i]
            }
            console.log(output);
        }
    } 
    if(word1.length < word2.length) {
        for(var i=0; i < word2.length; i++){
            if(word1[i]){
                output = output + word1[i]
            }
            if(word2[i]){
                output = output + word2[i]
            }
            console.log(output);
        }
    }
    return output
};

var nums1 = "ab";
var nums2 = "pqrs";
// console.log(mergeAlternately(nums1, nums2));
mergeAlternately(nums1, nums2);

// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r