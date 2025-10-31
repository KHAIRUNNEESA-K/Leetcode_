/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let sumWord1 = ""
    let sumWord2 = ""
    for (let i = 0; i < word1.length; i++) {
        sumWord1 += word1[i];
    }
    for (let j = 0; j < word2.length; j++) {
        sumWord2 += word2[j];
    }
    if (sumWord1 == sumWord2) {
        return true;
    }
    else {
        return false;
    }
};