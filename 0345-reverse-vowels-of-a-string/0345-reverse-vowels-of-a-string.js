/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=""
for(let i=0;i<s.length;i++){
    if(s[i] == "A" || s[i] == "E" ||s[i] == "I" || s[i] == "O" ||s[i] == "U" || s[i] == "a" ||s[i] == "e" || s[i] == "i" ||s[i] == "o" || s[i] == "u"){
        vowels+=s[i]
    }
}
let reversed=""
for(let i=vowels.length-1 ;i>=0;i--){
    reversed+=vowels[i]
}
let result="";
let j=0
for(let i=0;i<s.length;i++){
    if(s[i] == "A" || s[i] == "E" ||s[i] == "I" || s[i] == "O" ||s[i] == "U" || s[i] == "a" ||s[i] == "e" || s[i] == "i" ||s[i] == "o" || s[i] == "u"){
        result+=reversed[j];
        j++
    }
    else{
        result+=s[i]
    }
}
return result;
};