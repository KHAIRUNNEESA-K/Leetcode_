var findWordsContaining = function(words, x) {
    let splitedStr = ""
let arrOfIndices =[]
for(let i=0; i<words.length; i++){
    splitedStr=words[i].split("")
    for(let j=0 ;j<splitedStr.length ;j++){
        if(splitedStr[j]==x){
            arrOfIndices.push(i)
            break
        }
    }
    
}
return arrOfIndices;
}