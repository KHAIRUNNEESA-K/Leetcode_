/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        let pre = 0
        for (let j = 0; j < pref.length; j++) {
            if (words[i][j] == pref[j]) {
                pre++
            }
        }
        if (pref.length == pre) {
            count++
        }
    }
    return count;
};