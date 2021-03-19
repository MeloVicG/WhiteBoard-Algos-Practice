// //enochs

// var longestCommonPrefix = function (strs) {
//     let firstWord = strs[0];
//     let prefix = '';
//     let prefixArr = [];
//     if (!strs[0]) {
//         return "";
//     } else if (strs.length === 1) {
//         return strs[0];
//     } else {

//         for (let i = 1; i <= strs.length - 1; i++) {
//             let word = strs[i];

//             for (let i = 0; i <= word.length - 1; i++) {

//                 if (word[i] === firstWord[i]) {
//                     prefix += word[i];
//                 } else {
//                     i = word.length;
//                 }
//             };
//             prefixArr.push(prefix);
//             prefix = '';
//         };

//         let smallestIndex = 0;
//         let lengthTestString = prefixArr[0];
//         let secondPrefixArr = [];
//         for (let y = 1; y <= prefixArr.length - 1; y++) {
//             if (prefixArr[y].length < lengthTestString.length) {

//                 smallestIndex = y;
//             };
//         };

//         if (prefixArr[0] === '') {
//             return "";
//         } else if (!prefixArr[0]) {
//             return "";
//         } else {
//             return prefixArr[smallestIndex];
//         };
//     };
// };


// my solution

var output = ""

var longestCommonPrefix = function (strs) {
    //create nested forloop
    //each loop will interate to match first index 
    console.log(strs);
    console.log(output);


}


var input = ["flower","flow","flight"];
longestCommonPrefix(input);


//--examples--
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.