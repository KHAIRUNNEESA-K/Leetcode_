var restoreString = function(s, indices) {
    let newArr=[];
for(let i=0;i<s.length;i++){
    newArr[indices[i]]=s[i]
}
return newArr.join("")
};