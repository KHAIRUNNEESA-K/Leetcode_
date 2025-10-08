/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let result = "";

let splittedStr = title.toLowerCase().split(" ");

for (let i = 0; i < splittedStr.length; i++) {
    let word = splittedStr[i];
    // Only capitalize if word length >= 2
    if (word.length > 2) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    result += word + " ";
}

// Trim the trailing space
result = result.trim();
return result
};