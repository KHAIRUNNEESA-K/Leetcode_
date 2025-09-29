var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
    let palindrom="";
    for(let j=words[i].length-1;j>=0;j--){
        palindrom+=words[i][j]
        if (words[i] == palindrom){
            return words[i]
        }
    }
} return "";
};