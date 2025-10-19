/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let index = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let temp = "";
            for (let j = 0; j < needle.length; j++) {
                temp += haystack[i + j];
            }
            if (temp === needle) {
                index = i;
                break;
            }
        }
    }
    return index;
};