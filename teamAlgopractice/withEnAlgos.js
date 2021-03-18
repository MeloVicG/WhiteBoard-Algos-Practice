var longestCommonPrefix = function (strs) {
    let firstWord = strs[0];
    let prefix = '';
    let prefixArr = [];
    console.log(`First Word: ${firstWord}`);
    for (let i = 1; i <= strs.length - 1; i++) {
        let word = strs[i];
        console.log(word);
        for (let i = 0; i <= word.length - 1; i++) {
            console.log(word[i]);
            if (word[i] === firstWord[i]) {
                // console.log(`${word[i]} is the letter at index ${i} of word ${word} and ${firstWord[i]} is the letter at index ${i} of word ${firstWord}`);
                prefix += word[i];
            }
        };
        prefixArr.push(prefix);
        prefix = '';
        // for (let i = 0; i <= word.length - 1; i++) {
        //   if (x === s[i]){
        //     intArray.push(romanKey[x]);
        //   };
        // };
    };
    console.log('Input: ', strs);
    console.log('Output: ', prefixArr);
    console.log()



};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);