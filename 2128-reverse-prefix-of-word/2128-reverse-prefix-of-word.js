/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let result = ""
    let indexNo = -1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
            indexNo = i;
            break;
        }
    }
    if (indexNo == -1) {
        return word;
    }
    for (let i = indexNo; i >= 0; i--) {
        result += word[i]
    }
    for (let i = indexNo + 1; i < word.length; i++) {
        result += word[i]
    }
    return result;
};