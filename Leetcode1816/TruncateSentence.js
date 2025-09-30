var truncateSentence = function(s, k) {
    let arr=s.split(" ")
let word="";
for(let i=0;i<arr.length;i++){
    if(i<k){
       word+=arr[i]+" "
    }
}
word=word.trim();
return word;
};